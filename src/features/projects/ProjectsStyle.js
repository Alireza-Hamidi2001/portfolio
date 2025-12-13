import styled from "styled-components";
import { respond } from "../../utils/mixins";

export const SkewSection = styled.div`
    transform: skewY(-6deg);
    margin-top: -10rem;
    background: var(--color-primary-dark);

    display: grid;
    grid-template-columns: 1fr;
`;

export const StyledProjects = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
    transform: skewY(6deg);
    padding: 10rem 5rem;
    
    ${respond("tab-port")`
            grid-template-columns: 1fr 1fr;
        `}
    ${respond("phone")`
            grid-template-columns: 1fr;
            padding: 10rem;
        `}

    & > div:nth-of-type(1) {
        grid-column: 1/-1;
    }

    & video {
        width: 100%;
        height: auto;
        cursor: pointer;
        transition: all 0.3s;
        border: 3px solid transparent;

        filter: grayscale(1);
    }

    & video:hover {
        filter: grayscale(0);
        box-shadow: 0 0 4rem var(--color-green);
        /* scale: 1.02; */
        border: 3px solid var(--color-green);
        transform: skewY(0deg);
    }

    /* &:hover video:not(:hover) {
        scale: 0.98;
        filter: grayscale(1);
    } */

    & a {
        font-size: 1.5rem;
        text-decoration: none;
        color: var(--color-primary-light);
        font-style: italic;

        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.2s;
        border-bottom: 1px solid transparent;
    }
`;
export const H1 = styled.h1`
    font-size: 4rem;
    font-family: "Lime";
    word-spacing: 10px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 6rem;
    font-weight: bold;
    color: var(--color-primary-light);

    grid-column: 1/-1;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const P = styled.h1`
    grid-column: 1/-1;
    font-family: "open-sans";
    text-align: center;
    margin-top: 4rem;
    color: var(--color-primary-light);
    font-style: italic;
    font-size: 1.8rem;
    font-weight: 100;

    & a {
        display: inline-block;
        color: var(--color-gold);
        font-size: 2.4rem;
        padding: 0 1rem;
        cursor: pointer;
        animation: moreProjects 0.8s infinite;
    }
`;

export const ProjectItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
`;
