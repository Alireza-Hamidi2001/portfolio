import styled from "styled-components";
import { respond } from "../../utils/mixins";

export const StyledCertificate = styled.div`
    background: var(--color-primary-darkest);
    padding: 20rem 10rem;
    margin-top: -10rem;

    display: grid;
    grid-template-columns: 1fr;
`;

export const H1 = styled.h1`
    font-size: 4rem;
    margin-bottom: 6rem;
    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lime";
`;

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10rem;

    ${respond("phone")`
        gap: 15rem;
    `}

    & section {
        display: grid;
        align-items: center;
        gap: 3rem;

        &:nth-of-type(1) {
            grid-template-columns: 1fr 3fr;
            ${respond("tab-port")`
                    grid-template-columns: 1fr;
                `}
        }
        &:nth-of-type(2) {
            grid-template-columns: 3fr 1fr;
            ${respond("tab-port")`
                    grid-template-columns: 1fr;
                `}
        }

        & img {
            width: 100%;
            filter: grayscale(1);
            transition: all 0.2s;
            border: 3px solid transparent;
            cursor: pointer;
            scale: 0.95;

            &:hover {
                filter: grayscale(0);
                border: 3px solid var(--color-green);
                box-shadow: 0 0 1rem var(--color-green);
                scale: 1;
            }
        }
    }
`;

export const Ul = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 5rem;
    position: relative;
    gap: 2.5rem;
    margin: 0 auto;
`;
export const Li = styled.li`
    list-style: none;
    color: var(--color-primary-light);
    font-size: 1.5rem;
    font-family: "open-sans";
    font-style: italic;
    position: relative;

    ${respond("phone")`
        font-size: 2.5rem;
    `}

    & span {
        position: absolute;
        opacity: 0.1;
        left: -2rem;
        top: -3rem;
        font-size: 5rem;
        font-family: "Courgette";
        font-style: normal !important;
    }
`;
