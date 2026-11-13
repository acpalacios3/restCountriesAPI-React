import useTheme from "../hooks/useTheme";

function Navbar() {

    const { theme, toggleTheme } = useTheme();

    return (
        <header className="navbar">

            <h1>Where in the World?</h1>

            <button className="theme-button"
                onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

        </header>
    );
}

export default Navbar;