import styled from "styled-components";

export const StyledFooter = styled.footer`
    background: var(--color-primary-dark);
    /* background: red; */
    font-size: 1.5rem;
    text-align: center;
    padding: 5rem 0 5rem 0;
    margin-top: -8rem;

    display: grid;
    justify-content: space-evenly;
    gap: 2rem;

    /* transform: skewY(-6deg); */
    & > * {
        /* transform: skewY(6deg); */
    }

    color: var(--color-primary-light);

    & p {
        & span {
            font-family: "Caveat";
            font-size: 2rem;
        }
    }
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    column-gap: 2rem;
`;

export const Li = styled.li`
    list-style: none;
    transition: all 0.2s;

    & a {
        color: var(--color-primary-light);
    }

    &:hover {
        scale: 1.1;
    }
    &:nth-of-type(1) {
        color: skyblue;
    }
    &:nth-of-type(2) {
        color: blue;
    }
    &:nth-of-type(3) {
    }
    &:nth-of-type(4) {
        color: gray;
    }
`;
