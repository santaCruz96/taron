import { useEffect, useRef } from 'react';
import Splitting from 'splitting';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from "react-responsive";
import Star from './Star';
import grapeImg from '../../img/grape.png'
import * as S from './style';

gsap.registerPlugin(ScrollTrigger);

function ReviewsSection() {
    const isMobile = useMediaQuery({ query: "(max-width: 480px)" })

    const headerRef = useRef(null)
    const starsRef = useRef(null)
    const textRef = useRef(null)

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
        Splitting()

        const headerChars = headerRef.current.querySelectorAll('.word > .char, .whitespace')

        const triggerConfig = {
            trigger: headerRef.current,
            start: isMobile ? 'top 60%' : 'top 45%', 
            // markers: true,
        };

        gsap.fromTo(
            headerChars,
            {
                y: '100%', 
            },
            {
                y: '0%', 
                ease: 'power2.out',
                stagger: 0.03, 
                scrollTrigger: triggerConfig,
                onComplete: () => {
                    gsap.fromTo(
                        textRef.current,
                        { y: '20%' }, 
                        {
                            opacity: 1, 
                            y: '0%', 
                            duration: 1, 
                            ease: 'power2.out',
                        }
                    );
                    gsap.fromTo(
                        starsRef.current,
                        { y: '20%' }, 
                        {
                            opacity: 1, 
                            y: '0%', 
                            duration: 1, 
                            ease: 'power2.out',
                        }
                    );
                },
            }
        )
    }, [isMobile])

    return (
        <S.ReviewsSection>
            <S.ReviewsSectionHeader ref={headerRef} data-splitting>
                Reviews
            </S.ReviewsSectionHeader>
            <S.GrapeWrapper>
                <S.Grape src={grapeImg} alt="Grape" />
            </S.GrapeWrapper>
            <S.StarsBlock ref={starsRef}>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </S.StarsBlock>
            <S.ReviewsText ref={textRef}>
                Our clients give us 5 star ratings but prefer to stay discrete. References are available upon demand.
            </S.ReviewsText>
        </S.ReviewsSection>
    )
}

export default ReviewsSection;