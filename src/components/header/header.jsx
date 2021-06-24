import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../providers/theme.provider";

import { FaRegMoon, FaGithub } from "react-icons/fa";
import "./header.styles.scss";

const HeaderComponent = () => {
  const { toggleDarkMode, isDarkMode } = useContext(ThemeContext);

  return (
    <header className={`header-container ${isDarkMode && "is-dark-mode"}`}>
      <div className="header">
        <div className="title">
          <Link to="/">
            <h1 className="title">Where in the word?</h1>
          </Link>
        </div>

        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          <FaRegMoon className="icon" />
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
