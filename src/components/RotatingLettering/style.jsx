import styled from "@emotion/styled";

export const RotatingLettering = styled.div`
    cursor: pointer;
    position: absolute;
    top: -85px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 171px;
    height: 171px;
    z-index: 10;

    @media (max-width: 1200px) {
        top: -60px;
        width: 120px;
        height: 120px;
    }
`

export const Lettering = styled.svg`
    position: absolute;
`

export const Arrow = styled.svg`
    transition: stroke 0.3s ease;

    path {
        transition: stroke 0.3s ease; 
        stroke: ${({ isHovered }) => (isHovered ? '#fbb040' : '#fff')};
    }

    @media (max-width: 1200px) {
        path {
            stroke: #fff;
        }
    }
`