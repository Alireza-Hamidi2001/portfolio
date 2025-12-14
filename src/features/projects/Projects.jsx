import { videosInformation } from "../../data/demos";
import { PiLampPendantBold } from "react-icons/pi";
import {
    H1,
    P,
    ProjectItem,
    SkewSection,
    StyledProjects,
} from "./ProjectsStyle";
import { Link } from "react-router-dom";
import { container, fadeBottom, fadeTop } from "../../framer-motion/variant";
import { motion } from "framer-motion";

function Projects() {
    return (
        <SkewSection
            id="projects"
            as={motion.section}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
        >
            <StyledProjects>
                <motion.div variants={fadeBottom}>
                    <H1>
                        <PiLampPendantBold className="icons_light" />
                        Projects overview
                    </H1>
                </motion.div>
                {videosInformation.map((item) => (
                    <motion.div variants={fadeTop}>
                        <ProjectItem>
                            <video
                                muted
                                autoPlay
                                loop
                                poster={item.image}
                            >
                                <source
                                    src={item.src}
                                    type="video/mp4"
                                />
                            </video>
                        </ProjectItem>
                    </motion.div>
                ))}
                <P>
                    Want to see more ? <br /> Check out the full
                    <Link to="/projects">Projects</Link>
                    page for the complete collection
                </P>
            </StyledProjects>
        </SkewSection>
    );
}

export default Projects;
