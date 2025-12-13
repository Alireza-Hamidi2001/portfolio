import { ImageWrapper } from "../../layouts/header/HeaderStyles";
import { H1, Main, Skill, StyledSkill } from "./SkillsStyle";
import image from "./../../assets/images/skills.png";
import ProgressSkill from "./ProgressSkill";

// icons
import { FaChartSimple } from "react-icons/fa6";
import { PiLampPendantBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { container, fadeBottom, fadeLeft, fadeRight } from "../../framer-motion/variant";

function Skills() {
    return (
        <StyledSkill
            id="skills"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
        >
            <motion.div variants={fadeBottom}>
                <H1>
                    <PiLampPendantBold className="icons_light" />
                    Skills
                </H1>
            </motion.div>
            <Main>
                <FaChartSimple className="icons_chart" />
                <motion.div variants={fadeLeft}>
                    <ImageWrapper>
                        <img
                            src={image}
                            alt="image logo"
                        />
                    </ImageWrapper>
                </motion.div>
                <motion.div variants={fadeRight}>
                    <ProgressSkill />
                </motion.div>
            </Main>
        </StyledSkill>
    );
}

export default Skills;
