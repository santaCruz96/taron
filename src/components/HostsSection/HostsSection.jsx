import { useEffect, useRef } from 'react';
import { useScroll } from '../contexts/ScrollProvider';
import Splitting from 'splitting';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from "react-responsive";
import GrapeIcon from './GrapeIcon';
import hostsImg from '../../img/hosts_img.jpg';
import * as S from './style';

gsap.registerPlugin(ScrollTrigger);

function HostsSection({ name }) {
    const isMobile = useMediaQuery({ query: "(max-width: 480px)" })
    const isTwoLines = useMediaQuery({ query: "(max-width: 396px)" })
    
    const imgRef = useRef(null)
    const headerRef = useRef(null)
    const textRef = useRef(null)
    const iconRef = useRef(null) 

    const { registerSection } = useScroll()

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
        registerSection(name, imgRef)
    }, [name, registerSection])

    useEffect(() => {
        Splitting()

        const headerChars = headerRef.current.querySelectorAll('.word > .char, .whitespace')

        const triggerConfig = {
            trigger: headerRef.current,
            start: isMobile ? 'top 65%' : 'top-=30% 45%', 
            // markers: true,
        }

        gsap.fromTo(
            imgRef.current,
            { y: '20%' }, 
            {
                opacity: 1, 
                y: '0%', 
                duration: 1, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top-=30% 50%', 
                    toggleActions: 'play none none none', 
                    // markers: true
                },
            }
            
        )

        gsap.fromTo(
            headerChars,
            {
                y: isTwoLines ? '200%' : '100%', 
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
                            duration: 0.7, 
                            ease: 'power2.out',
                            onComplete: () => {
                                gsap.fromTo(
                                    iconRef.current,
                                    { y: '20%' }, 
                                    {
                                        opacity: 1, 
                                        y: '0%', 
                                        duration: 0.7, 
                                        ease: 'power2.out'
                                    }
                                )
                            }
                        }
                    )
                },
            }
        )
    }, [isMobile, isTwoLines])

    return (
        <S.HostsSection>
            <S.HostsImg ref={imgRef} src={hostsImg} alt='Hosts' />
            <S.HostsHeader ref={headerRef} data-splitting>
                Your humble hosts
            </S.HostsHeader>
            <S.HostsText ref={textRef}>
                A personalized touch is becoming rare in today’s world. We pride ourselves on providing one-on-one services with discretion and confidentiality. Our expertise is in curating luxury holidays and organizing corporate or private events, all tailored to meet the high standards of our clients.
            </S.HostsText>
            <GrapeIcon ref={iconRef}/>
        </S.HostsSection>
    )
}

export default HostsSection;