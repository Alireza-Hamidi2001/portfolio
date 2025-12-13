import { Li, Ul } from "./FooterStyle";

// ICONS
import { RiTelegram2Fill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

function FooterSocial() {
    return (
        <Ul>
            <Li>
                <a
                    href="https://t.me/alireza_arh12"
                    target="_blank"
                >
                    <RiTelegram2Fill
                        style={{ fill: "url(#telegramGradient)" }}
                        className="icons_footer"
                    />
                </a>
            </Li>
            <Li>
                <a
                    href="https://www.linkedin.com/in/alireza-hamidi-aa8547288"
                    target="_blank"
                >
                    <BsLinkedin
                        style={{ fill: "url(#linkedinGradient)" }}
                        className="icons_footer"
                    />
                </a>
            </Li>
            <Li>
                <a
                    href="https://www.instagram.com/__alireza.hamidi__/"
                    target="_blank"
                >
                    <FaInstagram
                        style={{ fill: "url(#instagramGradient)" }}
                        className="icons_footer"
                    />
                </a>
            </Li>
            <Li>
                <a
                    href="https://github.com/Alireza-Hamidi2001"
                    target="_blank"
                >
                    <SiGithub
                        style={{ fill: "url(#githubGradient)" }}
                        className="icons_footer"
                    />
                </a>
            </Li>
        </Ul>
    );
}

export default FooterSocial;
