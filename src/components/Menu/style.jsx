import styled from "@emotion/styled";

export const MenuWrapper = styled.div`
    position: absolute;
    top: 40px;
    right: 20px;
    display: flex;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 999;

    @media (max-width: 1200px) {
        top: 10px;
        right: 10px;
    }
`;

export const MenuContainer = styled.div`
    background: var(--taron-fill-burgundy);
    width: 195px;
    padding: 0px 20px;
    text-align: left;

    @media (max-width: 1200px) {
        padding: 0 10px 10px 10px;
    }

    @media (max-width: 480px) {
        padding: 0 10px;
        width: 160px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    cursor: pointer;
    top: 16px;
    right: 18px;
    background: transparent;
    border: none;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 129%;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: right;
    color: var(--taron-fill-white);
    transition: color 0.3s ease;
    z-index: 999;

    :hover {
        color: var(--taron-fill-orange);
    }

    @media (max-width: 1200px) {
        font-weight: 500;
        font-size: 12px;
        line-height: 129%;
        letter-spacing: 0.08em;
        right: 10px;

        :hover {
            color: var(--taron-fill-white);
        }

        :active {
            color: var(--taron-fill-orange);
        }
    }

    @media (max-width: 480px) {
        font-weight: 500;
        font-size: 10px;
        line-height: 129%;
        letter-spacing: 0.08em;
    }
`

export const ItemsBlock = styled.div`
    position: relative;
    height: 275px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1200px) {
        height: 225px;
    }
`

export const MenuItem = styled.div`
    text-wrap: wrap;
    position: absolute;
    cursor: pointer;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    color: var(--taron-fill-white);
    overflow: hidden;
    opacity: 1;
    top: ${props => props.top};
    right: 0;
    z-index: 1002;

    @media (max-width: 480px) {
        font-weight: 400;
        font-size: 16px;
    }
`

export const MenuItemItalic = styled.div`
    text-wrap: wrap;
    position: absolute;
    cursor: pointer;
    font-family: var(--third-family);
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    color: var(--taron-fill-white);
    overflow: hidden;
    opacity: 0;
    top: ${props => props.top};
    right: 0;
    z-index: 1001;

    @media (max-width: 480px) {
        font-weight: 400;
        font-size: 32px;
    }
`

export const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 120px;
    margin-bottom: 10px;

    @media (max-width: 1200px) {
        margin-top: 80px;
    }

    @media (max-width: 480px) {
        margin-bottom: 0;
    }
`

export const ContactHeader = styled.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: var(--taron-fill-white);
    opacity: 0.5;
    margin-bottom: 20px;

    @media (max-width: 1200px) {
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
    }

    @media (max-width: 480px) { 
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        letter-spacing: 0.02em;
    }
`

export const ContactItem = styled.a`
    cursor: pointer;
    text-decoration: none;
    width: fit-content;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: var(--taron-fill-white);
    margin-bottom: 10px;
    transition: color 0.3s ease;

    :hover {
        color: var(--taron-fill-orange);
    }

    @media (max-width: 1200px) {
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;

        :hover {
            color: var(--taron-fill-white);
        }

        :active {
            color: var(--taron-fill-orange);
        }
    }

    @media (max-width: 480px) { 
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        letter-spacing: 0.02em;
    }
`

