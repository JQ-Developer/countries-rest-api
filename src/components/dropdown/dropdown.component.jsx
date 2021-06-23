import { useState, useContext, useEffect } from "react";
import { CountriesContext } from "../providers/countries.provider";
import { filteringCountriesByRegion } from "../../utils/utils";
import "./dropdown.styles.scss";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const DropdownComponent = () => {
  const { entireList, setFilteredCountries } = useContext(CountriesContext);

  const [value, setValue] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const handleDisplay = () => setIsOpen(!isOpen);

  const handleSelector = (e) => {
    handleDisplay();
    setValue(e.target.innerText);
  };

  useEffect(() => {
    setFilteredCountries(filteringCountriesByRegion(entireList, value));
  }, [value, setFilteredCountries, entireList]);

  return (
    <form className="form">
      <div className="dropdown">
        <div className="select" onClick={handleDisplay}>
          <span>Filter by Region</span>
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
