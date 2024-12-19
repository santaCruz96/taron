import styled from '@emotion/styled';

export const FirstSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 221px 0;
    background-size: cover;
    background-position-y: center;

    @media (max-width: 1200px) {
        padding: 149px 20px;
    }

    @media (max-width: 480px) {
        padding: 193px 20px 222px 20px;
    }
}
`

export const FirstSectionVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`

export const FirstSectionVideoOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ isVideoLoaded }) => (isVideoLoaded ? 'rgba(0, 0, 0, 0.6)' : 'var(--taron-fill-burgundy)')};
    z-index: 2;
`

export const FirstSectionHeader = styled.h1`
    max-width: 922px;
    font-family: var(--third-family);
    font-weight: 400;
    font-size: 64px;
    line-height: 120%;
    text-align: center;
    color: var(--taron-fill-orange);
    overflow: hidden;
    z-index: 5;

    @media (max-width: 1200px) {
        font-size: 40px;
    }

    @media (max-width: 480px) {
        font-size: 32px;
    }
`

export const FirstSectionText = styled.p`
    max-width: 720px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-align: center;
    color: var(--taron-fill-white);
    opacity: 0;
    z-index: 5;

    @media (max-width: 1200px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`