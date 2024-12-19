import { useEffect, useRef } from 'react';
import { useScroll } from '../contexts/ScrollProvider';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import { Autoplay } from 'swiper/modules';
import Splitting from 'splitting';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from "react-responsive";
import 'swiper/swiper-bundle.css';
import Slide from '../Slide/Slide';
import ControlButton from './ControlButton';
import PropTypes from 'prop-types';
import * as S from './style'; 

import slidersData from '../../data/slidersData';

gsap.registerPlugin(ScrollTrigger);

function SliderSection({
    order,
    second,
    third,
    name
}) {
    const isTwoLine = useMediaQuery({ query: "(max-width: 858px)" })
    const isThreeLine = useMediaQuery({ query: "(max-width: 422px)" })

    const swiperRef = useRef(null)
    const scrollToRef = useRef(null)
    const headerRef = useRef(null)
    const buttonsRef = useRef(null)
    const contactButtonRef = useRef(null)
    const { registerSection } = useScroll()
    const { scrollToSection } = useScroll()

    function slidesPerView() {
        if (order === 1) 
            return 3
        if (order === 2)
            return 2
        if (order === 3)
            return 1
    }

    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            ScrollTrigger.refresh();
        };
    
        window.addEventListener('resize', handleResize)
    
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        registerSection(name, scrollToRef)
    }, [name, registerSection])

    useEffect(() => {
        if (!swiperRef.current) return;
        Splitting()

        const headerChars = headerRef.current.querySelectorAll('.word > .char, .whitespace')

        const triggerConfig = {
            trigger: headerRef.current,
            start: 'top 55%', 
            onEnter: () => {
                if (swiperRef.current && swiperRef.current.autoplay) {
                    swiperRef.current.autoplay.start();
                }
            },
            // markers: true,
        };

        gsap.fromTo(
            headerChars,
            {
                y: isThreeLine ? '300%' : isTwoLine ? '200%' : '100%', 
            },
            {
                y: '0%', 
                ease: 'power2.out',
                stagger: 0.03, 
                scrollTrigger: triggerConfig,
                onComplete: () => {
                    gsap.fromTo(
                        swiperRef.current.el, 
                        { y: '20%' }, 
                        {
                            opacity: 1, 
                            y: '0%', 
                            duration: 0.7, 
                            ease: 'power2.out',
                            onComplete: () => { 
                                gsap.fromTo(
                                    buttonsRef.current,
                                    { y: '20%' }, 
                                    {
                                        opacity: 1, 
                                        y: '0%', 
                                        duration: 0.7, 
                                        ease: 'power2.out',
                                        onComplete: () => { 
                                            gsap.fromTo(
                                                contactButtonRef.current,
                                                { y: '20%' }, 
                                                {
                                                    opacity: 1, 
                                                    y: '0%', 
                                                    duration: 0.7, 
                                                    ease: 'power2.out',
                                                }
                                            )
                                        }
                                    }
                                )
                            }
                        },
                    )
                },
            }
        )

        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop();
        }

    }, [isThreeLine, isTwoLine])

    return (
        <S.SliderSection ref={scrollToRef} second={second} third={third}>
            <S.SliderSectionHeader ref={headerRef} data-splitting>
                {slidersData[order - 1].header}
            </S.SliderSectionHeader>
            <S.Slider
                modules={[Navigation, Autoplay]}
                ref={swiperRef}
                autoplay={false}
                grabCursor={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onTouchStart={() => {
                    if (swiperRef.current && swiperRef.current.autoplay) {
                        swiperRef.current.autoplay.stop();
                    }
                }}
                breakpoints={{
                    100: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                        slidesOffsetBefore: 0,
                        slidesOffsetAfter: 40,
                    },
                    481: {
                        slidesPerView: order === 1 || order === 2 ? 2 : 1,
                        spaceBetween: 20
                    },
                    1201: { 
                        slidesPerView: slidesPerView(),
                        spaceBetween: 40
                    },
                }}
            >
                {slidersData[order - 1].slides.map((slide) => 
                    <SwiperSlide>
                        <Slide
                            imageSrc={slide.imageSrc}
                            title={slide.title}
                            tags={slide.tags}
                            description={slide.description}
                            second={second}
                            third={third}
                        />
                    </SwiperSlide>
                )}
            </S.Slider>
            <S.SliderButtons ref={buttonsRef}>
                <ControlButton direction={'left'} onClick={() => swiperRef.current?.slidePrev()}/>
                <ControlButton direction={'right'} onClick={() => swiperRef.current?.slideNext()}/>
            </S.SliderButtons>
            {order !== 3 && 
                <S.ContactButton ref={contactButtonRef} onClick={() => scrollToSection('footer')}>
                    contact us
                </S.ContactButton>
            }
        </S.SliderSection>
    )
}

SliderSection.propTypes = {
    order: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    second: PropTypes.bool,
    third: PropTypes.bool
};

export default SliderSection;