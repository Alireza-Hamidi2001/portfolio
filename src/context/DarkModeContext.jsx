import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState();

    useEffect(function(){
        if(isDarkMode) {
            document.documentElement.classList.add('dark-mode')
        }
        if(!isDarkMode) {
            document.documentElement.classList.remove('dark-mode')
        }
    },[isDarkMode])

    function toggleDarkMode() {
        setIsDarkMode((isDark) => !isDark);
    }
    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

function useDarkMode() {
    const context = useContext(DarkModeContext);
    return context;
}

export { DarkModeProvider, useDarkMode };
