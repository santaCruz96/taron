import { useState } from 'react';
import { useScroll } from '../contexts/ScrollProvider';
import Lettering from './Lettering';
import Arrow from './Arrow';
import * as S from './style';

function RotatingLettering() {
    const [isHovered, setIsHovered] = useState(false)
    const { scrollToSection } = useScroll()

    return (
        <S.RotatingLettering
            onClick={() => scrollToSection('first-slider')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Lettering />
            <Arrow isHovered={isHovered} />
        </S.RotatingLettering>
    )
}

export default RotatingLettering;