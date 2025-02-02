import { useEffect, useRef } from 'react';
import Splitting from 'splitting';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from "react-responsive";
import * as S from './style';

gsap.registerPlugin(ScrollTrigger);

function OriginsSection() {
    const headerRef = useRef(null)
    const textRef = useRef(null)

    const isThreeLine = useMediaQuery({ query: "(max-width: 404px)" })
    const isFourLine = useMediaQuery({ query: "(max-width: 364px)" })

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

        gsap.fromTo(
            headerChars,
            {
                y: isFourLine ? '400%' : isThreeLine ? '300%' : '200%' , 
            },
            {
                y: '0%', 
                ease: 'power2.out',
                stagger: 0.03, 
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 55%', 
                },
                onComplete: () => {
                    gsap.fromTo(
                        textRef.current,
                        {   y: '20%',
                            opacity: 0
                        }, 
                        {
                            opacity: 1, 
                            y: '0%', 
                            duration: 1, 
                            ease: 'power2.out',
                        }
                    )
                }
            }
        )
    }, [isFourLine, isThreeLine])

    return (
        <S.OriginsSection>
            <S.OriginsHeading ref={headerRef} data-splitting>Origins, Traditions, Roots, Experiences</S.OriginsHeading>
            <S.OriginsTextBlock ref={textRef}>
                <S.OriginsText>
                    The origins of TARON begin near the Mountains of Ararat where Noah’s ark landed after the great ﬂood. According to Biblical scripture, one of Noah’s post ﬂood activities was to launch a vineyard: “Noah, the tiller of the soil, was the ﬁrst to plant a vineyard” (Genesis 9:20). Noah’s creation set the groundwork for the Armenian wine tradition and culture.
                </S.OriginsText>
                <S.OriginsText>
                    From the very beginning the focus of the TARON companies was quality and craftsmanship, and 100 years later, a burning passion for wine continues to inspire the TARON family. Wine industry veteran and architect of a new generation of TARON, Armen Vardanyan has set a goal to create a unique experience that seeks to educate wine connoisseurs, experts and general public on the historic origins of vineyards, while introducing them to the world’s most exclusive experience that Napa Valley and Sonoma County have to offer.
                </S.OriginsText>
            </S.OriginsTextBlock>
        </S.OriginsSection>
    )
}

export default OriginsSection