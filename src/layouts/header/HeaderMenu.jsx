import logo from "./../../assets/images/alireza4.png";

// ICONS
import { MdOutlineWbSunny } from "react-icons/md";

import { BsQuestion } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { StyledLogo, StyledUl } from "./HeaderStyles";
import { PiCertificateThin } from "react-icons/pi";


function HeaderMenu() {
    return (
        <header>
            <StyledLogo>
                <img
                    src={logo}
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
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#certificates">
                        <PiCertificateThin />
                        Certificates
                    </a>
                </li>
            </StyledUl>
            <div>
                <MdOutlineWbSunny className="icons_theme" />
            </div>
        </header>
    );
}

export default HeaderMenu;
