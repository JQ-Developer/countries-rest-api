import { useState, useContext } from "react";
import { filteringCountriesByRegion } from "../../utils/utils";

import { CountriesContext } from "../providers/countries.provider";
import { ThemeContext } from "../providers/theme.provider";

import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import "./dropdown.styles.scss";

const DropdownComponent = () => {
  const { entireList, setFilteredCountries, filterValue, setFilterValue } =
    useContext(CountriesContext);
  const { isDarkMode } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const handleDisplay = () => setIsOpen(!isOpen);

  //Toggle dropdown and sets filter by region
  const handleSelector = (e) => {
    handleDisplay();

    const region = e.target.innerText;

    setFilterValue(region);
    setFilteredCountries(filteringCountriesByRegion(entireList, region));
  };

  return (
    <form className={`form ${isDarkMode && "is-dark-mode"}`}>
      <div className="dropdown">
        <div className="select" onClick={handleDisplay}>
          <span>
            {filterValue === "All" ? "Filter by region" : filterValue}
          </span>
          {isOpen ? <FaCaretUp /> : <FaCaretDown />}
        </div>
        <div className={`list ${isOpen && "is-open"}`}>
          <div className="item" onClick={handleSelector}>
            All
          </div>
          <div className="item" onClick={handleSelector}>
            Africa
          </div>
          <div className="item" onClick={handleSelector}>
            Americas
          </div>
          <div className="item" onClick={handleSelector}>
            Europe
          </div>
          <div className="item" onClick={handleSelector}>
            Oceania
          </div>
        </div>
      </div>
    </form>
  );
};

export default DropdownComponent;
