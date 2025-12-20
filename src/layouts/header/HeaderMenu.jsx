import logo from "./../../assets/images/alireza5.png";
import logo2 from "./../../assets/images/alireza4.png";

// ICONS
import { BsQuestion } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { StyledLogo, StyledUl } from "./HeaderStyles";
import { PiCertificateThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import DarkMode from "../../theme/DarkMode";
import { useDarkMode } from "../../context/DarkModeContext";

function HeaderMenu() {
    const { isDarkMode } = useDarkMode();
    const srcLogo = isDarkMode ? logo2 : logo;
    return (
        <header>
            <StyledLogo>
                <img
                    src={srcLogo}
                    alt="header logo image"
                />
            </StyledLogo>
            <StyledUl>
                <li>
                    <a href="#about">
                        <BsQuestion />
                        About
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <RiContactsLine />
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#skills">
                        <GiSkills />
                        skills
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <FaChartLine />
                        Overview
                    </a>
                </li>
                <li>
                    <Link to="/projects">
                        <FaChartLine />
                        Projects
                    </Link>
                </li>
                <li>
                    <a href="#certificates">
                        <PiCertificateThin />
                        Certificates
                    </a>
                </li>
            </StyledUl>
            <DarkMode />
        </header>
    );
}

export default HeaderMenu;
