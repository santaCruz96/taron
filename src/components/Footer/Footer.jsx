import { useEffect, useRef } from 'react';
import { useScroll } from '../contexts/ScrollProvider';
import Splitting from 'splitting';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from "react-responsive";
import Logo from './Logo';
import * as S from './style';

gsap.registerPlugin(ScrollTrigger);

function Footer({ name }) {
    const headerRef = useRef(null)
    const buttonsRef = useRef(null)
    const logoRef = useRef(null)
    const { scrollToSection } = useScroll()
    const { registerSection } = useScroll()

    const isTwoLine = useMediaQuery({ query: "(max-width: 384px)" })

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
        registerSection(name, headerRef)
    }, [name, registerSection])

    useEffect(() => {
        Splitting()

        const headerChars = headerRef.current.querySelectorAll('.word > .char, .whitespace')

        const triggerConfig = {
            trigger: headerRef.current,
            start: 'top-=150% 45%', 
            // markers: true,
        }

        gsap.fromTo(
            headerChars,
            {
                y: isTwoLine ? '200%' : '100%', 
            },
            {
                y: '0%', 
                ease: 'power2.out',
                stagger: 0.03, 
                scrollTrigger: triggerConfig,
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
                                    logoRef.current,
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
    }, [isTwoLine])

    return (
        <S.Footer>
            <S.FooterHeader ref={headerRef} data-splitting>
                Begin Your Jorney
            </S.FooterHeader>
            <S.ContactsBlock ref={buttonsRef}>
                <S.ContactButton
                    href="https://t.me/+13104080278"
                    target="_blank"
                    onClick={() => {
                        window.gtag('event', 'click', { 'event_category': 'button', 'event_action': 'tg', })
                    }}
                >
                    TELEGRAM
                </S.ContactButton>
                <S.ContactButton
                    href="https://wa.me/+13104080278"
                    target="_blank"
                    onClick={() => {
                        window.gtag('event', 'click', { 'event_category': 'button', 'event_action': 'wapp', })
                    }}
                >
                    WhatsApp
                </S.ContactButton>
                <S.ContactButton
                    href="mailto:Info@taronwinetours.com"
                    onClick={() => {
                        window.gtag('event', 'click', { 'event_category': 'button', 'event_action': 'email', })
                    }}
                >
                    e-mail
                </S.ContactButton>
            </S.ContactsBlock>
            <Logo ref={logoRef}/>
            <S.FooterCopywrite>
                ©2020 by Taron LLC. TCP # 39446-A
            </S.FooterCopywrite>
            <S.ToTopButton onClick={() => scrollToSection('header')}>
                <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.999999 8.47117L7 2M7 2L13 8.47117M7 2L7 20" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
                TOP
            </S.ToTopButton>
        </S.Footer>
    )
}

export default Footer;