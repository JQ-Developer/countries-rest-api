import { useContext, useEffect, useState } from "react";

import { CountriesContext } from "../../components/providers/countries.provider";
import { filteringCountries } from "../../utils/utils";

import { CardList } from "../../components/card-list/card-list.component";
import DropdownComponent from "../../components/dropdown/dropdown.component";
import { SearchBox } from "../../components/search-box/search-box.component";

import "./homepage.styles.scss";

const Homepage = () => {
  const { entireList, filteredCountries, setFilteredCountries, isLoading } =
    useContext(CountriesContext);

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setFilteredCountries(filteringCountries(entireList, searchValue));
  }, [searchValue]);

  return (
    <div className="homepage-container">
      <div className="homepage">
        <div className="setup-menu">
          <SearchBox
            placehoder="Search for a country..."
            handleChange={handleChange}
          />

          <DropdownComponent />
        </div>

        {isLoading ? (
          "...Loading, please wait."
        ) : (
          <CardList countries={filteredCountries} />
        )}
      </div>
    </div>
  );
};

export default Homepage;
