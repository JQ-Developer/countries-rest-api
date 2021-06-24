import { useContext } from "react";

import { ThemeContext } from "../providers/theme.provider";
import { CountriesContext } from "../providers/countries.provider";
import { filteringCountries } from "../../utils/utils";

import { FaSearch } from "react-icons/fa";
import "./search-box.styles.scss";

const SearchBox = () => {
  const { entireList, setFilteredCountries, setSearchValue, searchValue } =
    useContext(CountriesContext);
  const { isDarkMode } = useContext(ThemeContext);

  //Sets the searchValue to query, and filters based on it
  const handleChange = (e) => {
    const query = e.target.value;
    setSearchValue(query);
    setFilteredCountries(filteringCountries(entireList, query));
  };

  return (
    <div className={`search-container ${isDarkMode && "is-dark-mode"}`}>
      <FaSearch className="icon" />
      <input
        className="search"
        type="search"
        placeholder="Search for a country..."
        onChange={handleChange}
        value={searchValue}
      />
    </div>
  );
};

export default SearchBox;
