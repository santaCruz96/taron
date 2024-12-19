import * as S from './style';

function Arrow({ isHovered }) {
    return (
        <S.Arrow isHovered={isHovered} width="18" height="57" viewBox="0 0 18 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 46.192L9 55M9 55L0.999998 46.192M9 55L9 1" stroke="white" stroke-width="2" stroke-linecap="round" />
        </S.Arrow>
    )
}

export default Arrow;