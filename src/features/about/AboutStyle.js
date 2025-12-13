import styled from "styled-components";
import { respond } from "../../utils/mixins";

export const StyledAbout = styled.div`
    width: 100%;
    font-size: 2rem;
    background: var(--color-primary-darkest);
    margin: 10rem 0;
    transform: skewY(-6deg);
    padding: 10rem 0 5rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    color: var(--color-primary-light);

    & > * {
        transform: skewY(6deg);
    }
`;

export const H1 = styled.h1`
    transform: skewY(6deg);
    font-family: "Lime";
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const Main = styled.main`
    transform: skewY(6deg);
    padding: 0 4rem 12rem 4rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: relative;
    z-index: 2;

    ${respond("phone")`
        grid-template-columns: 1fr;
        gap: 20rem;
    `}
`;

export const P = styled.p`
    width: 100%;
    margin-bottom: 4rem;
`;

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0 7rem;
    
    ${respond("phone")`
        margin:0 auto;
        padding: 0;
    `}
`;

export const StyledLi = styled.li`
    position: relative;
    list-style: none;
    font-family: "open-sans";
    font-size: 2.4rem;
    color: var(--color-primary-light);
    font-style: italic;
    
    display: flex;
    align-items: center;
    width: max-content;

    ${respond("phone")`
        font-size: 3.4rem;
        `}

    & span {
        position: absolute;
        font-size: 1.5rem;

        &:nth-of-type(1) {
            opacity: 0.1;
            left: -4rem;
            top: -6rem;
            font-size: 6rem;
            font-family: "Courgette";
            font-style: normal !important;
        }
        &:nth-of-type(2) {
            font-family: "open-sans";
            font-style: italic;
            opacity: 0.5;
            left: -2.5rem;
            top: -1.7rem;
        }
        &:nth-of-type(3) {
            font-family: "open-sans";
            font-style: italic;
            opacity: 0.03;
            right: -5rem;
            font-size: 7rem;
        }
    }
`;

export const Img = styled.img`
    width: 25rem;
    justify-self: center;

    ${respond("phone")`
        width: 1rem;
    `}
`;

export const Bubble = styled.div`
    display: block;
    background-color: var(--color-primary-light);
    position: absolute;
    border-radius: 50%;
    opacity: 0.05;
    z-index: 1;

    &:nth-of-type(1) {
        left: 25%;
        top: 40%;
        width: 3rem;
        height: 3rem;
        animation: firstBubble 6s infinite;
    }
    &:nth-of-type(2) {
        top: 35%;
        right: 35%;
        width: 1.5rem;
        height: 1.5rem;
        animation: secondBubble 5s infinite;
    }
    &:nth-of-type(3) {
        top: 50%;
        right: 50%;
        width: 4.5rem;
        height: 4.5rem;
        animation: thirdBubble 7s infinite;
    }
`;
