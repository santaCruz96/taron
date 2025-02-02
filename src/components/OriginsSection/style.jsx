import styled from '@emotion/styled';
import bgImg from './../../img/origins_1.jpg'

export const OriginsSection = styled.section`
    height: 659px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    padding: 120px 40px;
    background-image: url('${bgImg}');
    background-size: cover;

    @media (max-width: 1200px) {
        height: 640px
        gap: 40px;
        padding: 60px 20px;
    }

    @media (max-width: 4800px) {
        padding: 40px 20px;
        gap: 20px;
    }
`

export const OriginsHeading = styled.h3`
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
    }
`

export const OriginsTextBlock = styled.div`
    display: flex;
    gap: 120px;
    opacity: 0;

    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 20px;
    }
`

export const OriginsText = styled.p`
    width: 520px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: var(--taron-fill-white);

    @media (max-width: 1200px) {
        width: 100%;
        font-size: 16px;
    }

    @media (max-width: 4800px) {
        width: 100%;
        font-size: 12px;
    }
`