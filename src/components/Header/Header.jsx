import { useEffect, useRef } from 'react';
import { useScroll } from '../contexts/ScrollProvider';
import { useMenu } from '../contexts/MenuProvider';
import Logo from './Logo';
import * as S from './style';

function Header({name}) {
    const scrollToRef = useRef(null)
    const { registerSection } = useScroll()

    const { toggleMenu } = useMenu()

    useEffect(() => {
        registerSection(name, scrollToRef)
    }, [name, registerSection])

    return (
        <S.Header ref={scrollToRef}>
            <Logo />
            <S.MenuButton onClick={toggleMenu}>menu</S.MenuButton>
        </S.Header>
    )
}

export default Header;