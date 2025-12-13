// IMAGE
import HeaderMenu from "./HeaderMenu";
import HeaderText from "./HeaderText";
import HeaderImage from "./HeaderImage";

import { Information, StyledHeader } from "./HeaderStyles";

function Header() {
    return (
        <StyledHeader>
            <HeaderMenu />
            <Information>
                <HeaderText />
                <HeaderImage />
            </Information>
        </StyledHeader>
    );
}

export default Header;
