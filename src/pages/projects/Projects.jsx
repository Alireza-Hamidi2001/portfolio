import { Header, Li, StyledProjectPage, Ul } from "./ProjectPageStyle";
import logo from "./../../assets/images/alireza4.png";

// ICONS
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

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
            <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </div>
        </StyledProjectPage>
    );
}

export default Projects;
