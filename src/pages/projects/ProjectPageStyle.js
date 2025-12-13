import styled from "styled-components";

export const StyledProjectPage = styled.div`
    min-height: 100vh;
`;

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
