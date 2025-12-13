import { PiLampPendantBold } from "react-icons/pi";
import { H1, Li, Main, StyledCertificate, Ul } from "./CertificateStyle";
import { FaCertificate } from "react-icons/fa6";

import meta from "./../../assets/images/meta.PNG";
import michigan from "./../../assets/images/michigan.PNG";
import { motion } from "framer-motion";
import {
    container,
    fadeBottom,
    fadeLeft,
    fadeRight,
} from "../../framer-motion/variant";

function Certificates() {
    return (
        <StyledCertificate
            id="certificates"
            as={motion.section}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
        >
            <motion.div variants={fadeBottom}>
                <H1>
                    <PiLampPendantBold className="icons_light" />
                    Certificates
                </H1>
            </motion.div>
            <Main>
                <section>
                    <motion.div variants={fadeLeft}>
                        <img
                            src={meta}
                            alt="meta certificate"
                        />
                    </motion.div>
                    <Ul
                        as={motion.ul}
                        variants={container}
                    >
                        <FaCertificate className="icons_certificate" />
                        <Li
                            as={motion.li}
                            variants={fadeRight}
                        >
                            <span>1</span>
                            Professional front-end development certificate
                            designed by Meta.
                        </Li>
                        <Li
                            as={motion.li}
                            variants={fadeRight}
                        >
                            <span>2</span>
                            Focused on real-world industry practices and modern
                            front-end workflows.
                        </Li>
                        <Li
                            as={motion.li}
                            variants={fadeRight}
                        >
                            <span>3</span>
                            Covers React, modern JavaScript, and responsive UI
                            development.
                        </Li>
                        <Li
                            as={motion.li}
                            variants={fadeRight}
                        >
                            <span>4</span>
                            Emphasizes practical projects aligned with
                            professional standards.
                        </Li>
                    </Ul>
                </section>
                <section>
                    <Ul>
                        <FaCertificate className="icons_certificate" />
                        <Li
                            as={motion.li}
                            variants={fadeRight}
                        >
                            <span>1</span>
                            Academic web development certificate offered by the
                            University of Michigan.
                        </Li>
                        <Li
                            as={motion.li}
                            variants={fadeRight}
                        >
                            <span>2</span>
                            Strong foundation in HTML, CSS, and JavaScript
                            fundamentals.
                        </Li>
                        <Li
                            as={motion.li}
                            variants={fadeRight}
                        >
                            <span>3</span>
                            Emphasizes usability, accessibility, and structured
                            design principles.
                        </Li>
                        <Li
                            as={motion.li}
                            variants={fadeRight}
                        >
                            <span>4</span>
                            Provides a solid theoretical and analytical base for
                            front-end development.
                        </Li>
                    </Ul>
                    <motion.div variants={fadeRight}>
                        <img
                            src={michigan}
                            alt="michigan certificate"
                        />
                    </motion.div>
                </section>
            </Main>
        </StyledCertificate>
    );
}

export default Certificates;
