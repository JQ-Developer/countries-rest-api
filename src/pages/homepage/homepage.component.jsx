import { useContext } from "react";

import { CountriesContext } from "../../components/providers/countries.provider";
import { ThemeContext } from "../../components/providers/theme.provider";
import { CommonLoading } from "react-loadingg";

import DropdownComponent from "../../components/dropdown/dropdown.component";
import SearchBox from "../../components/search-box/search-box.component";
import CardList from "../../components/card-list/card-list.component";

import "./homepage.styles.scss";

const Homepage = () => {
  const { filteredCountries, isLoading } = useContext(CountriesContext);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`homepage-container ${isDarkMode && "is-dark-mode"}`}>
      <div className="homepage">
        <div className="setup-menu">
          <SearchBox />
          <DropdownComponent />
        </div>

        {isLoading ? (
          <CommonLoading />
        ) : (
          <CardList countries={filteredCountries} />
        )}
      </div>
    </div>
  );
};

export default Homepage;
