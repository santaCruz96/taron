import styled from "@emotion/styled";

export const NewsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 40px 120px 40px;
    background: var(--taron-fill-burgundy);

    @media (max-width: 1200px) {
        padding: 94px 20px 140px 20px;
    }

    @media (max-width: 480px) {
        padding: 120px 20px;
    }
`

export const NewsHeader = styled.h3`
    font-family: var(--third-family);
    font-weight: 400;
    font-size: 80px;
    line-height: 120%;
    text-align: center;
    color: var(--taron-fill-orange);

    @media (max-width: 1200px) {
        font-size: 48px;
    }

    @media (max-width: 480px) {
        font-size: 40px;
    }
`

export const NewsPhotoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    width: 100%;
    position: relative;
`;

export const NewsPhotoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 480px;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    @media (max-width: 1200px) {
        height: 340px;
    }

    @media (max-width: 480px) {
        height: 330px;
    }
`;

export const NewsPhotoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const NewsPhotoContent = styled.div`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, -50%);
    z-index: 2;
`;

export const NewsPhotoTitle = styled.h3`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: center;
    color: var(--taron-fill-white);

    @media (max-width: 1200px) {
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
    }
`

export const NewsText = styled.p`
    margin-top: 20px;
    width: 740px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-align: center;
    color: var(--taron-fill-white);

    @media (max-width: 1200px) {
        margin-top: 10px;
        font-size: 14px;
        width: 100%;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`