import Typewriter from "typewriter-effect";
import { PiHandWaving } from "react-icons/pi";
import { H1, P } from "./HeaderStyles";
import { motion } from "framer-motion";
import {
    container,
    fadeBottom,
    fadeRight,
    fadeTop,
} from "../../framer-motion/variant";

function HeaderText() {
    return (
        <section>
            <motion.section
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.div variants={fadeBottom}>
                    <H1>
                        <PiHandWaving className="icons_hands" />
                        Hey there
                    </H1>
                </motion.div>
                <motion.div variants={fadeTop}>
                    <P>
                        <span>I'm </span>
                        <span>Alireza Hamidi</span>
                    </P>
                </motion.div>

                <motion.div variants={fadeRight}>
                    <Typewriter
                        options={{
                            strings: [
                                "Computer Engineer",
                                "Front-End Developer",
                            ],
                            autoStart: true,
                            loop: true,
                            pauseFor: 2000,
                            deleteSpeed: 20,
                        }}
                    />
                </motion.div>
            </motion.section>
        </section>
    );
}

export default HeaderText;
