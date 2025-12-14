import {
    H1,
    Header,
    Item,
    Li,
    List,
    Project,
    ProjectContainer,
    ProjectLink,
    StyledProjectPage,
    Ul,
} from "./ProjectPageStyle";
import logo from "./../../assets/images/alireza4.png";

// ICONS
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { videosInformation } from "../../data/demos";
import { FaLink } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
    fadeBottom,
    fadeLeft,
    fadeRight,
    fadeTop,
} from "../../framer-motion/variant";

function Projects() {
    return (
        <StyledProjectPage>
            <Header
                as={motion.header}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeBottom}
            >
                <img
                    src={logo}
                    alt="logo in projects page"
                />
                <Ul>
                    <Li>
                        <Link to="/">
                            <GoHome />
                            Home
                        </Link>
                    </Li>
                </Ul>
            </Header>
            <ProjectContainer>
                {videosInformation.map((project) => (
                    <Project>
                        <motion.video
                            muted
                            autoPlay
                            loop
                            poster={project.image}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={fadeTop}
                        >
                            <source
                                src={project.src}
                                type="video/mp4"
                            />
                        </motion.video>
                        <section>
                            <H1
                                as={motion.header}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={fadeBottom}
                            >
                                {project.title}
                            </H1>
                            <List
                                as={motion.ul}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={fadeLeft}
                            >
                                {project.description.map((description) => (
                                    <Item
                                        as={motion.li}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.2 }}
                                        variants={fadeRight}
                                    >
                                        {description}
                                    </Item>
                                ))}
                                <ProjectLink
                                    href={project.url}
                                    target="_blanck"
                                >
                                    <FaLink />
                                    Check it here
                                </ProjectLink>
                            </List>
                        </section>
                    </Project>
                ))}
            </ProjectContainer>
        </StyledProjectPage>
    );
}

export default Projects;
