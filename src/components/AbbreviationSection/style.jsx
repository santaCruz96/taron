import styled from '@emotion/styled';
import bgImg from './../../img/abbreviation_1.jpg'

export const AbbreviationSection = styled.section`
    position: relative;
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-image: url('${bgImg}');
    background-size: cover;

    @media (max-width: 1200px) {
        height: 680px
    }

    @media (max-width: 480px) {
        align-items: flex-start;
    }
`

export const AbbreviationSectionGradient = styled.div`
    position: absolute;
    top: ${({position}) => position === 'top' ? '0' : 'auto'};
    bottom: ${({position}) => position === 'bottom' ? '0' : 'auto'};
    transform: ${props => props.transform};
    width: 100%;
    height: 160px;
    background: linear-gradient(360deg, #24000d 0%, rgba(36, 0, 13, 0) 100%);

    @media (max-width: 1200px) {
        height: 80px
    }
    
    @media (max-width: 480px) {
        height: 60px;
    }
`

export const AbbreviationTextBlock = styled.p`
    display: flex;
    flex-direction: column;
    margin-left: 108px;
    gap: 20px;

    @media (max-width: 480px) {
        padding-left: 20px;
        margin-left: 0;
    }
`

export const AbbreviationText = styled.p`
    height: 29px;
    font-family: var(--font-family);
    font-weight: 200;
    font-size: 40px;
    line-height: 140%;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--taron-fill-white);

    span {
        font-weight: 700;
        color: var(--taron-fill-orange);
    }

    @media (max-width: 1200px) {
        height: 23px;
        font-size: 32px;
    }

    @media (max-width: 480px) {
        height: 22px;
        font-size: 30px;
    }
`