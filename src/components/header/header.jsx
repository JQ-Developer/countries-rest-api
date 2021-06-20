import { FaRegMoon } from "react-icons/fa";
import "./header.styles.scss";

const HeaderComponent = () => (
  <header className="header-container">
    <div className="header">
      <h1 className="title">Where in the word?</h1>
      <button className="dark-mode-btn">
        <FaRegMoon className="icon" />
        Dark Mode
      </button>
    </div>
  </header>
);

export default HeaderComponent;
