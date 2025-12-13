import styled from "styled-components";
import { respond } from "../../utils/mixins";

export const StylesContact = styled.div`
    background: var(--color-primary-dark);
    padding: 20rem 0 20rem 10rem;
    margin-top: -20rem;

    ${respond("phone")`
        padding-left: 0;
    `}

    & img {
    }
`;

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 4rem 12rem 4rem;
    position: relative;
    z-index: 2;

    ${respond("phone")`
            grid-template-columns: 1fr;
            gap: 8rem;
        `}
`;

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    padding-left: 5rem;
    margin: 0 auto;

    ${respond("phone")`
        margin-top:10rem
    `}

    & h1 {
        font-size: 3.4rem;
        font-family: "Lime";
    }
`;

export const StyledLi = styled.li`
    position: relative;
    list-style: none;
    font-family: "open-sans";
    color: var(--color-primary-light);
    font-style: italic;

    display: flex;
    align-items: center;
    width: max-content;

    & a {
        text-decoration: none;
        color: var(--color-primary-light);
        transition: all 0.2s;
        font-size: 2rem;

        display: flex;
        align-items: center;
        font-size: 1.4rem;
        gap: 0.5rem;

        ${respond("phone")`
        font-size: 2.5rem;
    `}

        &:hover {
            transform: scale(1.05);
            text-decoration: underline;
        }
    }

    & span {
        position: absolute;
        font-size: 1.5rem;

        &:nth-of-type(1) {
            opacity: 0.1;
            left: -5rem;
            top: -5rem;
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
    }
`;

export const H1 = styled.h1`
    font-size: 4rem;
    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lime";

    grid-column: 1/-1;

    ${respond("phone")`
        margin-bottom: 10rem;
    `}
`;

export const P = styled.p`
    transform: skewY(6deg);
    width: 100%;
    margin: 0 auto;
    font-size: 2rem;
`;

export const Social = styled.div`
    font-family: "KottaOne";
    font-size: 2.5rem;

    ${respond("phone")`
        font-size: 3.5rem;
    `}
`;
