import styled from '@emotion/styled';

export const AboutSection = styled.section`
    position: relative;
    display: flex;
    padding: 180px 80px;
    gap: 120px; 
    background: var(--taron-fill-burgundy);

    @media (max-width: 1200px) {
        flex-direction: column;
        padding: 140px 20px;
        gap: 40px; 
    }

    @media (max-width: 480px) {
        padding: 120px 20px;
        gap: 20px; 
    }
`

export const AboutSectionHeader = styled.h2`
    font-family: var(--third-family);
    font-style: italic;
    font-weight: 600;
    font-size: 52px;
    letter-spacing: 0.02em;
    color: var(--taron-fill-orange);

    @media (max-width: 1200px) {
        text-align: center;
        font-size: 32px;
        width: 100%;
    }

    @media (max-width: 480px) {
        font-size: 24px;
    }
`

export const AboutSectionTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 1200px) {
        gap: 20px;
        width: 100%;
    }
`

export const AboutSectionText = styled.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: var(--taron-fill-white);

    @media (max-width: 1200px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`