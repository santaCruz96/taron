import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from "react-responsive";
import * as S from './style';

import interludeImages from '../../data/interludeImages';

gsap.registerPlugin(ScrollTrigger);

function InnterludeSection() {
    const [isActiveIndex, setIsActiveIndex] = useState(null)
    const sectionRef = useRef(null)
    const itemsRef = useRef([])
    const italicItemsRef = useRef([])
    const imageRefs = useRef([])

    const isTablet = useMediaQuery({ query: "(max-width: 1200px)" })
    const isMobile = useMediaQuery({ query: "(max-width: 480px)" })

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
        const items = Array.from(sectionRef.current.querySelectorAll('[data-innterlude-item]'))
        itemsRef.current = items

        items.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: item.dataset.start, 
                end: item.dataset.end,
                // markers: true,
                onEnter: () => activateItem(index),
                onEnterBack: () => activateItem(index),
                onLeave: () => deactivateItem(index),
                onLeaveBack: () => deactivateItem(index),
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, [])

    const activateItem = (activeIndex) => {
        setIsActiveIndex(activeIndex)
        itemsRef.current.forEach((item, index) => {
            if (index === activeIndex) {
                gsap.to(item, {
                    opacity: 0,
                    duration: 0.2
                })
                gsap.to(italicItemsRef.current[activeIndex], {
                    opacity: 1,
                    duration: 0.2
                })
            } else {
                gsap.to(item, {
                    opacity: 1,
                    duration: 0.2
                })
                gsap.to(italicItemsRef.current[index], {
                    opacity: 0,
                    duration: 0.2
                })
            }
        })
    }

    const deactivateItem = (index) => {
        setIsActiveIndex(null)
        gsap.to(itemsRef.current[index], {
            opacity: 1,
            duration: 0.2,
        });
        gsap.to(italicItemsRef.current[index], {
            opacity: 0,
            duration: 0.2,
        });
    }

    useEffect(() => {
        imageRefs.current.forEach((imgRef) => {
            gsap.to(imgRef, { opacity: 0, duration: 0.7, ease: 'power2.out' })
        });

        if (isActiveIndex !== null && imageRefs.current[isActiveIndex * 2]) {
            gsap.to(imageRefs.current[isActiveIndex * 2], { opacity: 1, duration: 0.7, ease: 'power2.out' })
            gsap.to(imageRefs.current[isActiveIndex * 2 + 1], { opacity: 1, duration: 0.7, ease: 'power2.out' })
        }
    }, [isActiveIndex])

    return (
        <S.InnterludeSection ref={sectionRef}>
            <S.InnterludeItem
                ref={el => (itemsRef.current[0] = el)}
                data-innterlude-item
                data-start={isMobile ? "-40% 50%" : isTablet ? "-30% 50%" : "-40% 50%"}
                data-end={isMobile ? "123% 50%" : isTablet ? "bottom 50%" : "115% 50%"}
                top={isTablet ? "50px" : "120px"}
                left={isTablet ? "50%" : "50px"}
                transform = 'translateX(-50%)'
            >
                Experience
            </S.InnterludeItem>
            <S.InnterludeItemItalic
                ref={el => (italicItemsRef.current[0] = el)}
                top={isTablet ? "45px" : "110px"}
                left={isTablet ? "50%" : "50px"}
                transform = 'translateX(-50%)'
            >
                Experience
            </S.InnterludeItemItalic>
            <S.InnterludeItem
                ref={el => (itemsRef.current[1] = el)}
                data-innterlude-item
                data-start={isMobile ? "-37% 50%" : isTablet ? "-19% 50%" : "-35% 50%"}
                data-end={isMobile ? "123% 50%" : isTablet ? "bottom 50%" : "135% 50%"}
                top={isTablet ? "145px" : "353px"}
                right={isTablet ? "50%" : "243px"}
                transform = 'translateX(50%)'
            >
                Savor
            </S.InnterludeItem>
            <S.InnterludeItemItalic
                ref={el => (italicItemsRef.current[1] = el)}
                top={isTablet ? "140px" : "343px"}
                right={isTablet ? "50%" : "243px"}
                transform = 'translateX(50%)'
            >
                Savor
            </S.InnterludeItemItalic>
            <S.InnterludeItem
                ref={el => (itemsRef.current[2] = el)}
                data-innterlude-item
                data-start={isMobile ? "-39% 50%" : isTablet ? "-21% 50%" : "-13% 50%"}
                data-end={isMobile ? "123% 50%" : isTablet ? "bottom 50%" : "133% 50%"}
                top={isTablet ? "241px" : "584px"}
                left={isTablet ? "50%" : "122px"}
                transform = 'translateX(-50%)'
            >
                Indulge
            </S.InnterludeItem>
            <S.InnterludeItemItalic
                ref={el => (italicItemsRef.current[2] = el)}
                top={isTablet ? "236px" : "574px"}
                left={isTablet ? "50%" : "122px"}
                transform = 'translateX(-50%)'
            >
                Indulge
            </S.InnterludeItemItalic>
            <S.InnterludeItem
                ref={el => (itemsRef.current[3] = el)}
                data-innterlude-item
                data-start={isMobile ? "-41% 50%" : isTablet ? "-23% 50%" : "-17% 50%"}
                data-end={isMobile ? "123% 50%" : isTablet ? "bottom 50%" : "135% 50%"}
                right={isTablet ? "50%" : "395px"}
                transform = 'translateX(50%)'
                top={isTablet ? "338px" : "817px"}
            >
                Taste
            </S.InnterludeItem>
            <S.InnterludeItemItalic
                ref={el => (italicItemsRef.current[3] = el)}
                right={isTablet ? "50%" : "395px"}
                transform = 'translateX(50%)'
                top={isTablet ? "333px" : "805px"}
            >
                Taste
            </S.InnterludeItemItalic>
            <S.InnterludeItem
                ref={el => (itemsRef.current[4] = el)}
                data-innterlude-item
                data-start={isMobile ? "-41% 50%" : isTablet ? "-24% 50%" : "-15% 50%"}
                data-end={isMobile ? "133% 50%" : isTablet ? "bottom 50%" : "130% 50%"}
                top={isTablet ? "435px" : "1050px"}
                left={isTablet ? "50%" : "50px"}
                transform = 'translateX(-50%)'
            >
                Discover
            </S.InnterludeItem>
            <S.InnterludeItemItalic
                ref={el => (italicItemsRef.current[4] = el)}
                top={isTablet ? "430px" : "1040px"}
                left={isTablet ? "50%" : "50px"}
                transform = 'translateX(-50%)'
            >
                Discover
            </S.InnterludeItemItalic>
            <S.InnterludeItem
                ref={el => (itemsRef.current[5] = el)}
                data-innterlude-item
                data-start={isMobile ? "-32% 50%" : isTablet ? "-24% 50%" : "-20% 50%"}
                data-end={isMobile ? "150% 50%" : isTablet ? "125% 50%" : "bottom+=60px 50%"}
                top={isTablet ? "532px" : "1283px"}
                right={isTablet ? "50%" : "275px"}
                transform = 'translateX(50%)'
            >
                Unwind
            </S.InnterludeItem>
            <S.InnterludeItemItalic
                ref={el => (italicItemsRef.current[5] = el)}
                top={isTablet ? "527px" : "1273px"}
                right={isTablet ? "50%" : "275px"}
                transform = 'translateX(50%)'
            >
                Unwind
            </S.InnterludeItemItalic>

            {interludeImages.map((img, index) => (
                <S.InnterludeImg 
                    key={index} 
                    src={img.src}
                    ref={(el) => (imageRefs.current[index] = el)}
                    style={{ ...img.style, opacity: 0, position: 'absolute', zIndex: -1 }}
                />
            ))}
        </S.InnterludeSection>
    )
}

export default InnterludeSection;
