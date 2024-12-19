import styled from '@emotion/styled';

export const Header = styled.header`
    position: absolute;
    display: flex;
    width: 100%;
    top: 30px;
    justify-content: space-between;
    z-index: 5;

    @media (max-width: 1200px) {
        top: 10px;
    }
`

export const Logo = styled.svg`
    margin-left: 40px;

    @media (max-width: 1200px) {
        margin-left: 20px;
        width: 131px; 
        height: 50px;
    }

    @media (max-width: 480px) {
        width: 105px; 
        height: 40px;
    }
`

export const MenuButton = styled.button`
    cursor: pointer;
    margin-right: 40px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 129%;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: center;
    color: var(--taron-fill-white);
    background: none;
    border: none;
    transition: color 0.3s ease;

    :hover {
        color: var(--taron-fill-orange);
    }

    @media (max-width: 1200px) {
        margin-right: 20px;
        font-size: 12px;

        :hover {
            background: none;
        }

        :active {
            color: var(--taron-fill-orange);
        }
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`