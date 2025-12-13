import { PiLampPendantBold } from "react-icons/pi";
import { Bubble } from "../about/AboutStyle";
import { motion } from "framer-motion";
import { container, fadeBottom, fadeRight } from "../../framer-motion/variant";

import image from "./../../assets/images/contact.png";

import {
    H1,
    Main,
    P,
    Social,
    StyledLi,
    StyledUl,
    StylesContact,
} from "./ContactStyle";
import { ImageWrapper } from "../../layouts/header/HeaderStyles";

// ICONS
import { RiTelegram2Fill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { LuMousePointerClick } from "react-icons/lu";

function Contact() {
    return (
        <StylesContact
            id="contact"
            as={motion.section}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
        >
            <Bubble></Bubble>
            <Bubble></Bubble>
            <Bubble></Bubble>
            <motion.div variants={fadeBottom}>
                <H1>
                    <PiLampPendantBold className="icons_light" />
                    Contact me
                </H1>
            </motion.div>
            <Main>
                <StyledUl
                    as={motion.ul}
                    variants={container}
                >
                    <StyledLi
                        as={motion.li}
                        variants={fadeRight}
                    >
                        <span>
                            <RiTelegram2Fill />
                        </span>
                        <span>Telegram</span>
                        <a
                            href="https://t.me/alireza_arh12"
                            target="_blank"
                        >
                            Text me on <Social>Telegram</Social>
                            <LuMousePointerClick className="icons_click" />
                        </a>
                    </StyledLi>
                    <StyledLi
                        as={motion.li}
                        variants={fadeRight}
                    >
                        <span>
                            <BsLinkedin />
                        </span>
                        <span>Linkedin</span>
                        <a
                            href="www.linkedin.com/in/alireza-hamidi-aa8547288"
                            target="_blank"
                        >
                            Check out my <Social>Linkedin</Social>
                            <LuMousePointerClick className="icons_click" />
                        </a>
                    </StyledLi>
                    <StyledLi
                        as={motion.li}
                        variants={fadeRight}
                    >
                        <span>
                            <FaInstagram />
                        </span>
                        <span>Instagram</span>
                        <a
                            href="https://www.instagram.com/__alireza.hamidi__/"
                            target="_blank"
                        >
                            Follow me on <Social>Instagram</Social>
                            <LuMousePointerClick className="icons_click" />
                        </a>
                    </StyledLi>
                    <StyledLi
                        as={motion.li}
                        variants={fadeRight}
                    >
                        <span>
                            <SiGithub />
                        </span>
                        <span>Github</span>
                        <a
                            href="https://github.com/Alireza-Hamidi2001"
                            target="_blank"
                        >
                            Check out my projects on <Social>Github</Social>
                            <LuMousePointerClick className="icons_click" />
                        </a>
                    </StyledLi>
                </StyledUl>
                <motion.div variants={fadeRight}>
                    <ImageWrapper>
                        <img
                            src={image}
                            alt="contact image"
                        />
                    </ImageWrapper>
                </motion.div>
            </Main>
        </StylesContact>
    );
}

export default Contact;
