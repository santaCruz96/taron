import {useState, useEffect, useRef } from 'react';
import Splitting from 'splitting';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from "react-responsive";
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
// import backgroundImage from '../../img/background_vineyards.jpg';
import coverVideo from '../../video/cover_video.mp4'
import * as S from './style';

gsap.registerPlugin(ScrollTrigger);

function FirstSection() {
    const isThreeLine = useMediaQuery({ query: "(max-width: 604px)" })
    
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    const headerRef = useRef(null)
    const textRef = useRef(null)

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true)
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
        Splitting()

        const headerChars = headerRef.current.querySelectorAll('.word > .char, .whitespace')

        const triggerConfig = {
            trigger: headerRef.current,
            start: 'top 35%', 
            // markers: true,
        }

        gsap.fromTo(
            headerChars,
            {
                y: isThreeLine ? '290%' : '200%', 
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
                    )
                },
            }
        )
    }, [isThreeLine])

    return (
        <S.FirstSection>
            <S.FirstSectionVideo
                src={coverVideo}
                onLoadedData={handleVideoLoaded}
                playsInline
                muted
                autoPlay
                loop
                controls={false}
            />
            <S.FirstSectionVideoOverlay isVideoLoaded={isVideoLoaded} />
            <S.FirstSectionHeader ref={headerRef} data-splitting>
                Handcrafted Private Journeys in Napa & Sonoma Valleys
            </S.FirstSectionHeader>
            <S.FirstSectionText ref={textRef}>
                We are a premier luxury concierge service, offering unparalleled experiences for sophisticated travelers, private VIP groups and corporations
            </S.FirstSectionText>
        </S.FirstSection>
    );
}

export default FirstSection;