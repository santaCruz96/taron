import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import RotatingLettering from '../RotatingLettering/RotatingLettering';
import * as S from './style';

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
    const headerRef = useRef(null)
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
        gsap.fromTo(
            headerRef.current,
            {
                x: '-100%', 
                opacity: 0, 
            },
            {
                x: '0%', 
                opacity: 1,
                duration: 1.3, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 80%', 
                    toggleActions: 'play none none none', 
                },
            }
        );

        gsap.fromTo(
            textRef.current,
            {
                x: '100%',
                opacity: 0, 
            },
            {
                x: '0%',
                opacity: 1, 
                duration: 1.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none', 
                },
            }
        )
    }, [])

    return (
        <S.AboutSection>
            <RotatingLettering/>
            <S.AboutSectionHeader ref={headerRef}>
                Crafting timeless experiences with a single point of contact
            </S.AboutSectionHeader>
            <S.AboutSectionTextBlock ref={textRef}>
                <S.AboutSectionText>
                    A personalized touch is becoming rare in today’s world. We pride ourselves on providing one-on-one services with discretion and confidentiality. Our expertise is in curating luxury holidays and organizing corporate or private events, all tailored to meet the high standards of our clients.
                </S.AboutSectionText>
                <S.AboutSectionText>
                    At the core of our approach is the mission to revolutionize how our clients experience Wine Country. This goes beyond simple wine tastings, as each journey is purposeful, ensuring that clients achieve their goals while discovering the best of the region.
                </S.AboutSectionText>
            </S.AboutSectionTextBlock>
        </S.AboutSection>
    )
}

export default AboutSection;