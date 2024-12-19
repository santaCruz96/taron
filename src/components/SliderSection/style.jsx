import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const SliderSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--taron-fill-burgundy);
    padding: ${({ second, third }) => (second ? '120px 40px 80px 40px' : third ? '80px 40px 120px 40px' : '0 40px 120px 40px')};

    @media (max-width: 1200px) {
        padding: ${({ second, third }) => (second ? '140px 20px 94px 20px' : third ? '94px 40px 120px 40px' : '0 20px 140px 20px')};
    }

    @media (max-width: 480px) {
        padding: ${({ second, third }) => (second ? '120px 20px' : third ? '120px 20px' : '0 20px 120px 20px')};
    }
`

export const SliderSectionHeader = styled.h3`
    font-family: var(--third-family);
    font-weight: 400;
    font-size: 80px;
    text-align: center;
    color: var(--taron-fill-orange);
    overflow: hidden;

    @media (max-width: 1200px) {
        font-size: 48px;
    }

    @media (max-width: 480px) {
        font-size: 40px;
    }
`

export const Slider = styled(Swiper)`
    display: flex;
    gap: 40px;
    width: 100%;
    margin-top: 40px;
    opacity: 0;

    @media (max-width: 1200px) {
        gap: 20px;
    }

    @media (max-width: 480px) {
        width: calc(100% + 40px); 
        margin-left: -20px; 

        .swiper-slide {
            transition: margin 0.3s ease-in-out;
        }

        .swiper-slide:first-child {
            margin-left: 20px;
        }

        .swiper-slide:last-child {
            margin-right: 20px; 
        }

        .swiper-slide-active:first-child {
            margin-left: 20px; 
        }

        .swiper-slide-active:last-child {
            width: 80%;
            margin-right: 0; 
        }

        .swiper-slide-next,
        .swiper-slide-prev {
            opacity: 0.2;
            transition: opacity 0.3s ease-in-out;
        }
    }
`

export const SliderButtons = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 40px;
    opacity: 0;

    @media (max-width: 1200px) {
        gap: 20px;
    }

    @media (max-width: 480px) {
        display: none;
    }
`

export const ControlButton = styled.button`
    cursor: pointer;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    transition: stroke 0.3s ease-in-out;

    svg path {
        transition: stroke 0.3s ease; 
    }

    :hover svg path {
        stroke: var(--taron-fill-orange);
    }

    @media (max-width: 1200px) {
        width: 38px;
        height: 38px;

        :hover svg path {
            stroke: var(--taron-fill-white);
        }

        :active svg path {
            stroke: var(--taron-fill-orange);
        }
    }
`

export const ContactButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
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
    z-index: 999;
    opacity: 0;

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
        width: 100%;
        font-size: 14px;
    }
`