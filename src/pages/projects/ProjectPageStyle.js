import styled from "styled-components";
import { respond } from "../../utils/mixins";

export const StyledProjectPage = styled.div``;

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 2rem;

    & img {
        width: 18rem;
        border-bottom: none;

        &:hover {
            border-bottom: none;
            transform: scale(1);
        }
    }
`;
export const Ul = styled.ul`
    display: flex;
    align-items: center;
`;
export const Li = styled.li`
    list-style: none;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.8rem;
    transition: all 0.3s;
    border-bottom: 1px solid transparent;

    &:hover {
        border-bottom: 1px solid var(--color-primary-text);
        transform: scale(1.05);
    }

    & a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--color-primary-light);
    }
`;
export const ProjectContainer = styled.div``;

export const Project = styled.div`
    display: grid;
    gap: 3rem;
    align-items: center;
    padding: 6rem 4rem;

    ${respond("tab-land")`
        padding: 6rem 1rem;
    `}

    &:nth-of-type(odd) {
        background: var(--color-primary-darkest);
        grid-template-columns: 3fr 2fr;

        & video {
            grid-column: 1/2;

            ${respond("tab-port")`
                grid-column: 1/-1;
            `}
        }
        & section {
            grid-column: 2/3;

            ${respond("tab-port")`
                grid-column: 1/-1;
            `}
        }

        ${respond("tab-port")`
            grid-template-columns: 1fr;
        `}
    }
    &:nth-of-type(even) {
        background: var(--color-primary-dark);
        grid-template-columns: 2fr 3fr;

        ${respond("tab-port")`
            grid-template-columns: 1fr;
        `}

        & video {
            grid-column: 2/3;

            ${respond("tab-port")`
                grid-column: 1/-1;
                grid-row: 1/2
                `}
        }
        & section {
            grid-column: 1/2;
            grid-row: 1/2;

            ${respond("tab-port")`
                grid-column: 1/-1;
                grid-row: 2/3
            `}
        }
    }

    & video {
        height: 25rem;
        border: 3px solid transparent;
        transition: all 0.3s;
        margin: 0 auto;

        &:hover {
            border: 3px solid var(--color-green);
            box-shadow: 0 0 2rem var(--color-green);
            cursor: pointer;
        }
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;

    width: max-content;
    margin: 0 auto;
    ${respond("tab-port")`
        width:60%
    `}
`;
export const Item = styled.li`
    list-style: none;
    font-size: 1.4rem;
    font-family: "open-sans";
    font-style: italic;
    color: var(--color-primary-text);

    ${respond("tab-port")`
        font-size: 2rem;
    `}
`;

export const H1 = styled.h1`
    font-family: "Lime";
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
`;

export const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    gap: 1rem;

    text-align: center;
    margin: 3rem auto 0 auto;
    font-size: 2rem;
    font-family: sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-primary-light);
    border-bottom: 1px dashed var(--color-primary-light);
    transition: all 0.2s;

    &:hover {
        scale: 1.05;
    }
`;
