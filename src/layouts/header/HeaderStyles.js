import styled from "styled-components";
import { respond } from "../../utils/mixins";

// styles
export const StyledHeader = styled.div`
    height: 100vh;

    & header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 2rem;
        height: 10vh;
    }
`;

export const StyledUl = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;

    ${respond("phone")`
        display:none
    `}

    & li {
        text-decoration: none;
        cursor: pointer;
        font-size: 1.4rem;
        transition: all 0.3s;
        border-bottom: 1px solid transparent;
        padding: 1rem;

        & a {
            color: var(--color-primary-light);
            text-decoration: none;

            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s;

            font-family: "open-sans";

            &:hover {
                color: var(--color-blue-light);
                font-weight: bold;
            }
        }
    }
`;
export const StyledLogo = styled.div`
    & img {
        width: 18rem;

        ${respond("phone")`
            width: 25rem;
        `}
    }
`;

export const Information = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr;
    height: 85vh;
    padding: 0 4rem 12rem 0;

    ${respond("tab-land")`
        padding: 0 0rem 12rem 0;
    `}
    ${respond("phone")`
        grid-template-columns: 1fr;
        padding: 0;
    `}

    & section {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    & section:nth-of-type(2) {
        align-items: center;
        overflow: hidden;
    }

    & section:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: "Edu";
        color: var(--color-primary-light);

        .Typewriter__wrapper {
            font-size: 2rem;
            color: var(--color-primary-light);
            font-family: "open-sans";
            word-spacing: 4px;
            font-style: italic;
            margin-left: 2rem;
            padding-left: 8rem;

            ${respond("phone")`
                font-size: 2.8rem;
            `}
        }

        .Typewriter__cursor {
            display: inline-block;
            font-style: italic;
            font-family: "open-sans";
            opacity: 0.4;
            font-size: 2rem;
            animation: blink 1s infinite;
        }
    }
`;

export const H1 = styled.h1`
    text-transform: uppercase;
    word-spacing: 8px;
    color: var(--color-green);
    font-size: 1.8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    padding-left: 8rem;

    position: relative;

    ${respond("phone")`
        margin-top: 10rem;
        font-size: 2.5rem;
        `}
`;
export const H3 = styled.h3`
    color: var(--color-green-dark);
    font-size: 2rem;
    word-spacing: 4px;
    text-indent: 3rem;
`;
export const P = styled.p`
    text-indent: 4rem;
    font-family: "open-sans";
    font-weight: 100 !important;
    color: var(--color-primary-light);
    padding-left: 8rem;
    position: relative;

    & span {
        &:nth-of-type(1) {
            position: absolute;
            left: -1rem;
            top: 2rem;
            font-size: 1.5rem;
            font-family: "Edu";
            padding-left: 8rem;

            ${respond("tab-land")`
            left: -2rem;
            `}
        }
        font-size: 8rem;
        margin-right: 1rem;
        font-family: "Caveat";

        ${respond("tab-land")`
            font-size: 6rem;
    `}
        ${respond("phone")`
            font-size: 8rem;
    `}
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        border-radius: 50%;
        width: 15rem;
        height: 15rem;
        background: var(--color-green);
        top: 25rem;
        left: 20rem;
        animation: imageFrame 1s infinite;
        display: none;

        ${respond("tab-port")`
        width: 10rem;
        height: 10rem;
        top: 25rem;
        left: 10rem;
        `}

        ${respond("phone")`
            display: none;
        `}
    }

    img {
        width: 55rem;
        height: 55rem;
        object-fit: cover;
        position: relative;
        margin: 0 auto;

        ${respond("tab-port")`
            width: 40rem;
            height: 40rem;
    `}
        ${respond("phone")`
            width: 85vw;
            height: 85vw;
    `}
    }
`;
