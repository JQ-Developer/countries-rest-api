import { FaSearch } from "react-icons/fa";
import "./search-box.styles.scss";

export const SearchBox = ({ placehoder, handleChange }) => {
  return (
    <div className="search-container">
      <FaSearch className="icon" />
      <input
        className="search"
        type="search"
        placeholder={placehoder}
        onChange={handleChange}
      />
    </div>
  );
};
