import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as S from './style';

gsap.registerPlugin(ScrollTrigger);

function AbbreviationSection() {
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
            textRef.current,
            {   x: '-20%',
                opacity: 0
            }, 
            {
                opacity: 1, 
                x: '0%', 
                duration: 1, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top-=30% 50%', 
                    // markers: true
                },
            }
        )
    })

    return (
        <S.AbbreviationSection>
            <S.AbbreviationSectionGradient 
                transform = 'rotate(180deg)' 
                position={'top'}
            />
            <S.AbbreviationSectionGradient 
                transform = 'rotate(0)' 
                position={'bottom'}
            />
            <S.AbbreviationTextBlock ref={textRef}>
                <S.AbbreviationText><span>t</span>erroir</S.AbbreviationText>
                <S.AbbreviationText><span>a</span>ppellation</S.AbbreviationText>
                <S.AbbreviationText><span>r</span>egion</S.AbbreviationText>
                <S.AbbreviationText><span>o</span>rigin</S.AbbreviationText>
                <S.AbbreviationText><span>n</span>ature</S.AbbreviationText>
            </S.AbbreviationTextBlock>
        </S.AbbreviationSection>
    )
}

export default AbbreviationSection;