import { useDarkMode } from "../context/DarkModeContext";

// ICONS
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

function DarkMode() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <div onClick={toggleDarkMode}>
            {isDarkMode ? (
                <FaRegMoon className="icons_theme" />
            ) : (
                <MdOutlineWbSunny className="icons_theme" />
            )}
        </div>
    );
}

export default DarkMode;
