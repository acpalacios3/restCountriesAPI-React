
import { createContext, useState, useEffect } from "react";

// create Theme Context
export const ThemeContext = createContext();

// create Provider
export function ThemeProvider({ children }) {

    // initialize theme
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    // apply theme to the body
    useEffect(() => {

        document.body.classList.toggle("dark-mode", theme === "dark");

        // save theme in localStorage
        localStorage.setItem("theme", theme);

    }, [theme]);

    // function to change themecontext
    const toggleTheme = () => {
        setTheme(prevTheme =>
            prevTheme === "light" ? "dark" : "light"
        );
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}