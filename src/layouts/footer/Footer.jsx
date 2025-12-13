// ICONS

import SVG from "./SVG";
import FooterSocial from "./FooterSocial";
import Copyright from "./Copyright";
import { StyledFooter } from "./FooterStyle";



function Footer() {
    return (
        <StyledFooter>
            <SVG />
            <Copyright />
            <FooterSocial />
        </StyledFooter>
    );
}

export default Footer;
