import styled from '@emotion/styled';

export const Footer = styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 200px 40px 23px 40px;
    background: linear-gradient(360deg, #43061b 0%, #24000d 100%);

    @media (max-width: 1200px) {
        padding: 140px 20px 10px 20px;
    }

    @media (max-width: 480px) {
        padding: 120px 20px 10px 20px;
    }
`

export const FooterHeader = styled.h3`
    font-family: var(--third-family);
    font-weight: 400;
    font-size: 80px;
    text-align: center;
    color: var(--taron-fill-orange);
    overflow: hidden;

    @media (max-width: 1200px) {
        font-size: 48px;
        line-height: 120%;
    }

    @media (max-width: 480px) {
        font-size: 40px;
        line-height: 120%;
    }
`

export const ContactsBlock = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 40px;
    opacity: 0;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`

export const ContactButton = styled.a`
    cursor: pointer;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--taron-fill-orange);
    background: transparent;
    border-radius: 60px;
    padding: 25px 50px;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    text-align: center;
    color: var(--taron-fill-white);
    padding-left: 54px;
    transition: background 0.3s ease-in-out;

    :hover {
        background: #8f0e28;
    }

    @media (max-width: 1200px) {
        font-size: 14px;

        :hover {
            background: transparent;
        }

        :active {
            background: #8f0e28;
        }
    }

    @media (max-width: 480px) {
        font-size: 14px;
        letter-spacing: 0.4em;
        width: 100%;
    }
`

export const Logo = styled.svg`
    margin-top: 80px;
    opacity: 0;

    @media (max-width: 1200px) {
        width: 78px;
        height: 100px;
    }

    @media (max-width: 480px) {
        width: 62px;
        height: 80px;
    }
`

export const FooterCopywrite = styled.p`
    margin-top: 80px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #cea7b5;

    @media (max-width: 1200px) {
        font-size: 12px;
        line-height: 150%;
        letter-spacing: 0.02em;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`

export const ToTopButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 338px;
    right: 40px;
    padding-left: 4px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 60px;
    width: 63px;
    height: 80px;
    background: #4b071e;
    border: none;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    text-align: center;
    color: var(--taron-fill-white);
    transition: background 0.3s ease-in-out;
    & svg {
        padding-right: 4px;
    }

    :hover {
        background: #8f0e28;
    }

    @media (max-width: 1200px) {
        display: none;
    }
`