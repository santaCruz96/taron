import styled from '@emotion/styled';

export const ReviewsSection = styled.section`
    background: var(--taron-fill-burgundy);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 140px 0;

    @media (max-width: 1200px) {
        padding: 46px 0;
    }

    @media (max-width: 480px) {
        padding: 41px 0 44px 0;
    }
`

export const ReviewsSectionHeader = styled.h3`
    font-family: var(--third-family);
    font-weight: 400;
    font-size: 80px;
    text-align: center;
    color: var(--taron-fill-orange);
    z-index: 2;
    overflow: hidden;

    @media (max-width: 1200px) {
        font-size: 48px;
    }

    @media (max-width: 480px) {
        font-size: 40px
    }
`

export const GrapeWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    mix-blend-mode: luminosity;
    opacity: 0.6;

    mask-image: linear-gradient(
        to bottom,
        transparent 0%,
        black 45%,
        black 55%,
        transparent 100%
    );
    mask-size: 100% 100%;
    mask-repeat: no-repeat;

    -webkit-mask-image: linear-gradient(
        to bottom,
        transparent 0%,
        black 45%,
        black 55%,
        transparent 100%
    );
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;

    @media (max-width: 480px) {
        overflow: hidden;
    }
`

export const Grape = styled.img`
    display: block;
    width: 1065px; 
    height: 822px; 

    @media (max-width: 1200px) {
        width: 600px; 
        height: 454px; 
    }

    @media (max-width: 1200px) {
        width: 494px; 
        height: 381px; 
    }
`

export const StarsBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 60px;
    z-index: 2;
    opacity: 0;

    @media (max-width: 1200px) {
        margin-top: 40px;
    }
`

export const StarWrapper = styled.div`
    width: 58px;
    height: 58px;

    @media (max-width: 1200px) {
        width: 40px;
        height: 40px;
    }
`

export const Star = styled.svg`
    width: 100%;
    height: auto;
`

export const ReviewsText = styled.p`
    width: 479px;
    margin-top: 20px;
    text-wrap: wrap;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-align: center;
    color: var(--taron-fill-white);
    opacity: 0;

    @media (max-width: 1200px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        width: auto;
        padding: 0 20px;
    }
`