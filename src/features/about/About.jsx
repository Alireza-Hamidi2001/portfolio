import { PiLampPendantBold } from "react-icons/pi";
import { motion } from "framer-motion";
import {
    container,
    fadeBottom,
    fadeLeft,
    fadeRight,
    fadeTop,
} from "../../framer-motion/variant";

import {
    Bubble,
    H1,
    Img,
    Main,
    P,
    StyledAbout,
    StyledLi,
    StyledUl,
} from "./AboutStyle";
import image from "./../../assets/images/about.png";
import { ImageWrapper } from "../../layouts/header/HeaderStyles";

// ICONS
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GrPersonalComputer } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

function About() {
    return (
        <StyledAbout
            id="about"
            as={motion.section}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
        >
            <Bubble></Bubble>
            <Bubble></Bubble>
            <motion.div variants={fadeBottom}>
                <H1>
                    <PiLampPendantBold className="icons_light" />
                    About me
                </H1>
            </motion.div>
            <Main>
                <motion.div variants={fadeLeft}>
                    <ImageWrapper>
                        <Img
                            src={image}
                            alt="image logo"
                        />
                    </ImageWrapper>
                </motion.div>
                <StyledUl
                    as={motion.ul}
                    variants={container}
                >
                    <StyledLi
                        as={motion.li}
                        variants={fadeRight}
                    >
                        <span>1</span>
                        <span>I'm</span>
                        <span>
                            <GrPersonalComputer />
                        </span>
                        Computer Engineer
                    </StyledLi>
                    <StyledLi
                        as={motion.li}
                        variants={fadeRight}
                    >
                        <span>2</span>
                        <span>enthusiastic</span>
                        <span>
                            <FaCode />
                        </span>
                        Front-End Developer
                    </StyledLi>
                    <StyledLi
                        as={motion.li}
                        variants={fadeRight}
                    >
                        <span>3</span>
                        <span>also</span>
                        <span>
                            <FaMagnifyingGlass />
                        </span>
                        Researcher
                    </StyledLi>
                    <StyledLi
                        as={motion.li}
                        variants={fadeRight}
                    >
                        <span>4</span>
                        <span>currently</span>
                        <span>
                            <HiOutlinePaintBrush />
                        </span>
                        Artist
                    </StyledLi>
                </StyledUl>
            </Main>
        </StyledAbout>
    );
}

export default About;
