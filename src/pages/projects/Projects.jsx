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

function Projects() {
    return (
        <StyledProjectPage>
            <Header>
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
                        <video
                            muted
                            autoPlay
                            loop
                            poster={project.image}
                        >
                            <source
                                src={project.src}
                                type="video/mp4"
                            />
                        </video>
                        <section>
                            <H1>{project.title}</H1>
                            <List>
                                {project.description.map((description) => (
                                    <Item>{description}</Item>
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
