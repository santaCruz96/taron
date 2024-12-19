import styled from "@emotion/styled";

export const SlideItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
`

export const SlideItemContainer = styled.div`
    position: relative;
    width: 100%;
    height: ${({ third }) => (third ? '480px' : '560px')};
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, ${({ isHovered, third }) => (isHovered || third ? 0.6 : 0)});
        transition: background 0.3s ease-in-out;
        z-index: 1;
    }

    @media (max-width: 1200px) {
        height: 340px;

        &::after {
            background: rgba(0, 0, 0, 0.6);
            z-index: 1;
        }
    }

    @media (max-width: 480px) {
        height: 330px;
    }
`

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
    transition: all 0.3s ease-in-out;
    transform: ${({ isHovered }) => (isHovered ? 'scale(1.05)' : 'none')};
`

export const SlideContent = styled.div`
    position: absolute;
    width: 100%;
    top: ${({ hasTags }) => (hasTags ? '57%' : '50%')};
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isHovered, hasTags }) =>
        isHovered && hasTags ? 'translate(-50%, -70%)' : 'translate(-50%, -50%)'};
    z-index: 2;
    

    @media (max-width: 1200px) {
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

export const SlideTitle = styled.h2`
    font-family: var(--font-family);  
    font-weight: ${({second, third}) => (second || third ? '500' : '400')};
    font-size: 32px;
    text-align: center;
    text-transform: ${({second, third}) => (second || third ? 'uppercase' : 'none')};
    color: ${({ second, third }) => (second || third ? '#ffebef' : 'var(--taron-fill-white)')};
    letter-spacing: ${({ second, third }) => (second || third ? '0.08em' : 'normal')};
    z-index: 2;

    @media (max-width: 1200px) {
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
    }
`

export const Tags = styled.div`
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px 5px;
    margin-top: 20px;
    opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
    z-index: 2;

    @media (max-width: 1200px) {
        opacity: 1;
        margin-top: 12px;
        gap: 6px 3px;
    }

    @media (max-width: 480px) {
        margin-top: 5px;
        gap: 5px 5px;
    }
`

export const Tag = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 50px;
    padding: 5px 10px;
    background: rgba(0, 0, 0, 0.7);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.02em;
    text-transform: lowercase;
    color: var(--taron-fill-white);

    @media (max-width: 1200px) {
        font-size: 9px;
    }
`

export const Description = styled.p`
    margin-top: 20px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-align: ${({ third }) => (third ? 'center' : 'left')};
    width: ${({ third }) => (third ? '740px' : '100%')};
    color: var(--taron-fill-white);
    opacity: ${({ isHovered, third }) => (isHovered || third ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;

    @media (max-width: 1200px) {
        width: 100%;
        margin-top: 10px;
        font-size: 14px;
        opacity: 1;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        text-align: left;
    }
`