import { motion } from "framer-motion";
import styled from "styled-components";
import { respond } from "../../utils/mixins";

export const StyledSkill = styled(motion.div)`
    background-color: var(--color-primary-darkest);
    padding: 10rem 0 20rem 0;
    margin-top: -15rem;

    width: 100vw;
    overflow-x: hidden;

    display: grid;
    grid-template-columns: 1fr;

    transform: skewY(-6deg);

    & > div {
        transform: skewY(6deg);
    }
`;

export const Main = styled.main`
    transform: skewY(6deg);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 4rem 12rem 4rem;

    ${respond("phone")`
            grid-template-columns: 1fr;
            gap: 8rem;
        `}
`;

export const Skill = styled.div`
    padding-top: 2rem;
    background: gold;
`;

export const H1 = styled.h1`
    transform: skewY(6deg);
    font-size: 4rem;
    margin-bottom: 6rem;
    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lime";
`;
