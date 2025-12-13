import { container, fadeRight } from "../../framer-motion/variant";
import image from "./../../assets/images/profile5.png";
import { motion } from "framer-motion";
import { ImageWrapper } from "./HeaderStyles";

function HeaderImage() {
    return (
        <section>
            <motion.section
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.div variants={fadeRight}>
                    <ImageWrapper>
                        <img
                            src={image}
                            alt="image logo"
                        />
                    </ImageWrapper>
                </motion.div>
            </motion.section>
        </section>
    );
}

export default HeaderImage;
