import "./search-box.styles.scss";

export const SearchBox = ({ placehoder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placehoder}
    onChange={handleChange}
  />
);
