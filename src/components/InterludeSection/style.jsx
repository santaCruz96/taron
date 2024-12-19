import styled from "@emotion/styled";

export const InnterludeSection = styled.section`
    position: relative;
    height: 1300px;
    padding: 120px 40px;
    gap: 80px;

    @media (max-width: 1200px) {
        height: 559px;
        padding: 60px 20px;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    @media (max-width: 480px) {
        height: 539px;
    }
`

export const InnterludeItem = styled.span`
    position: absolute;
    top: ${props => props.top || 'auto'};
    right: ${props => props.right || 'auto'};
    bottom: ${props => props.bottom || 'auto'};
    left: ${props => props.left || 'auto'};
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 128px;
    color: var(--taron-fill-light-grey);
    opacity: 1; 

    sup {
        position: relative;
        bottom: 1em;
        font-family: var(--font-family);
        font-style: italic;
        font-weight: 400;
        font-size: 24px;
        color: inherit; 
    }

    @media (max-width: 1200px) {
        transform: ${props => props.transform};
        font-size: 64px;

        sup {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        font-size: 48px;

        sup {
            font-size: 14px;
        }
    }
`

export const InnterludeItemItalic = styled.span`
    position: absolute;
    top: ${props => props.top || 'auto'};
    right: ${props => props.right || 'auto'};
    bottom: ${props => props.bottom || 'auto'};
    left: ${props => props.left || 'auto'};
    font-family: var(--third-family);
    font-style: italic;
    font-weight: 400;
    font-size: 128px;
    color: var(--taron-fill-coral);
    opacity: 0; 

    sup {
        position: relative;
        bottom: 1em;
        font-family: var(--font-family);
        font-style: italic;
        font-weight: 400;
        font-size: 24px;
        color: inherit; 
    }

    @media (max-width: 1200px) {
        font-size: 64px;
        transform: ${props => props.transform};

        sup {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        font-size: 48px;

        sup {
            font-size: 12px;
        }
    }
`

export const InnterludeImg = styled.img`
    position: absolute;
    top: ${props => props.top || 'auto'};
    right: ${props => props.right || 'auto'};
    bottom: ${props => props.bottom || 'auto'};
    left: ${props => props.left || 'auto'};
    z-index: -1;

    @media (max-width: 1200px) {
        max-width: 200px;
    }

    @media (max-width: 480px) {
        max-width: 100px;
    }
`