import styled from '@emotion/styled';

export const HostsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 0;
    background: var(--taron-fill-white);

    @media (max-width: 1200px) {
        padding: 60px 20px;
    }

    @media (max-width: 480px) {
        padding: 80px 20px;
    }
`

export const HostsImg = styled.img`
    width: 500px;
    height: 500px;
    opacity: 0;

    @media (max-width: 1200px) {
        width: 280px;
        height: 280px;
    }

    @media (max-width: 480px) {
        width: 230px;
        height: 238px;
    }
`

export const HostsHeader = styled.h3`
    margin-top: 60px;
    font-family: var(--third-family);
    font-weight: 400;
    font-size: 80px;
    text-align: center;
    color: var(--taron-fill-burgundy);
    overflow: hidden;

    @media (max-width: 1200px) {
        margin-top: 40px;
        font-size: 48px;
        line-height: 120%;
    }

    @media (max-width: 480px) {
        font-size: 40px;
        line-height: 120%;
    }
`

export const HostsText = styled.p`
    margin-top: 20px;
    width: 512px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.02em;
    text-align: center;
    color: var(--taron-fill-black);
    opacity: 0;

    @media (max-width: 1200px) {
        margin-top: 20px;
        font-size: 16px;
        line-height: 140%;
        width: 100%;
    }

    @media (max-width: 480px) {
        font-size: 40px;
        font-size: 12px;
        line-height: 140%;
    }
`

export const GrapeIcon = styled.svg`
    margin-top: 60px;
    opacity: 0;

    @media (max-width: 1200px) {
        margin-top: 40px;
        width: 35px;
        height: 40px;
    }
`