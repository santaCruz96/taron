import { useEffect, useRef } from 'react';
import { useScroll } from '../contexts/ScrollProvider';
import { gsap } from 'gsap';
import Splitting from 'splitting';
import { useMenu } from '../contexts/MenuProvider';
import { useMediaQuery } from "react-responsive";
import * as S from './style';

function Menu() {
    const { menuOpen, toggleMenu } = useMenu()
    const { scrollToSection } = useScroll()
    const menuRef = useRef(null)

    const isTablet = useMediaQuery({ query: "(max-width: 1200px)" })
    const isMobile = useMediaQuery({ query: "(max-width: 480px)" })

    const menuItemRefs = useRef([])
    const menuItemItalicRefs = useRef([])

    const handleMouseEnter = (index) => {
        gsap.to(menuItemRefs.current[index], { opacity: 0, duration: 0.2 })
        gsap.to(menuItemItalicRefs.current[index], { opacity: 1, duration: 0.2 })
    }

    const handleMouseLeave = (index) => {
        gsap.to(menuItemRefs.current[index], { opacity: 1, duration: 0.2 })
        gsap.to(menuItemItalicRefs.current[index], { opacity: 0, duration: 0.2 })
    }

    useEffect(() => {
        if (menuOpen) {
            Splitting({ target: '.menu-item', by: 'chars' })
            Splitting({ target: '.menu-item-italic', by: 'chars'})

            gsap.to(menuRef.current, {
                duration: 0.5,
                autoAlpha: 1,
                visibility: 'visible',
                pointerEvents: 'auto',
            })

            gsap.fromTo(
                '.menu-item .char',
                { y: 60 },
                { y: 0, stagger: 0.02, duration: 0.3 }
            )

            gsap.fromTo(
                '.menu-item-italic .char',
                { y: 60 },
                { y: 0, stagger: 0.02, duration: 0.3 }
            )

            gsap.fromTo('.contact-section', { opacity: 0 }, { opacity: 1, delay: 1 })
        } else {
            gsap.to(menuRef.current, {
                duration: 0.5,
                autoAlpha: 0,
                visibility: 'hidden',
                pointerEvents: 'none',
            });
        }
    }, [menuOpen])

    function scrollTo(name) {
        toggleMenu();
        scrollToSection(name);
    }

    return (
        <S.MenuWrapper ref={menuRef}>
            <S.MenuContainer>
                <S.CloseButton onClick={toggleMenu}>Close</S.CloseButton>
                <S.ItemsBlock>
                    <S.MenuItem
                        ref={el => menuItemRefs.current[0] = el}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={() => handleMouseLeave(0)}
                        onClick={() => scrollTo('first-slider')}
                        top={isTablet ? '109px' : isMobile ? '97px' : '152px'}
                        data-splitting
                        className="menu-item"
                    >
                        VIP Private Journeys
                    </S.MenuItem>
                    <S.MenuItemItalic
                        ref={el => menuItemItalicRefs.current[0] = el}
                        top='150px'
                        data-splitting
                        className="menu-item-italic"
                    >
                        VIP Private Journeys
                    </S.MenuItemItalic>

                    <S.MenuItem
                        ref={el => menuItemRefs.current[1] = el}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(1)}
                        onClick={() => scrollTo('second-slider')}
                        top={isTablet ? '141px' : isMobile ? '35px' : '187px'}
                        data-splitting
                        className="menu-item"
                    >
                        Corporate events
                    </S.MenuItem>
                    <S.MenuItemItalic
                        ref={el => menuItemItalicRefs.current[1] = el}
                        top={isTablet ? '50px' : isMobile ? '35px' : '185px'}
                        data-splitting
                        className="menu-item-italic"
                    >
                        Corporate events
                    </S.MenuItemItalic>

                    <S.MenuItem
                        ref={el => menuItemRefs.current[2] = el}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(2)}
                        onClick={() => scrollTo('third-slider')}
                        top={isTablet ? '173px' : isMobile ? '85px' : '221px'}
                        data-splitting
                        className="menu-item"
                    >
                        News & Facts
                    </S.MenuItem>
                    <S.MenuItemItalic
                        ref={el => menuItemItalicRefs.current[2] = el}
                        top={isTablet ? '100px' : isMobile ? '85px' : '219px'}
                        data-splitting
                        className="menu-item-italic"
                    >
                        News & Facts
                    </S.MenuItemItalic>

                    <S.MenuItem
                        ref={el => menuItemRefs.current[3] = el}
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={() => handleMouseLeave(3)}
                        onClick={() => scrollTo('hosts')}
                        top={isTablet ? '205px' : isMobile ? '135px' : '256px'}
                        data-splitting
                        className="menu-item"
                    >
                        About us
                    </S.MenuItem>
                    <S.MenuItemItalic
                        ref={el => menuItemItalicRefs.current[3] = el}
                        top={isTablet ? '150px' : isMobile ? '135px' : '254px'}
                        data-splitting
                        className="menu-item-italic"
                    >
                        About us
                    </S.MenuItemItalic>
                </S.ItemsBlock>
                <S.ContactSection className="contact-section">
                    <S.ContactHeader>Contact us</S.ContactHeader>
                    <S.ContactItem
                        href="https://t.me/+13104080278"
                        target="_blank"
                        onClick={() => {
                            window.gtag('event', 'click', { 'event_category': 'button', 'event_action': 'tg', })
                        }}
                    >
                        Telegram
                    </S.ContactItem>
                    <S.ContactItem
                        href="https://wa.me/+13104080278"
                        target="_blank"
                        onClick={() => {
                            window.gtag('event', 'click', { 'event_category': 'button', 'event_action': 'wapp', })
                        }}
                    >
                        WhatsApp
                    </S.ContactItem>
                    <S.ContactItem
                        href="mailto:Info@taronwinetours.com"
                        onClick={() => {
                            window.gtag('event', 'click', { 'event_category': 'button', 'event_action': 'email', })
                        }}
                    >
                        E-mail
                    </S.ContactItem>
                </S.ContactSection>
            </S.MenuContainer>
        </S.MenuWrapper>
    );
}

export default Menu;
