import { useContext, useState } from "react";

import { CountriesContext } from "../../components/providers/countries.provider";
import { filteringCountries } from "../../utils/utils";

import { CardList } from "../../components/card-list/card-list.component";

import { SearchBox } from "../../components/search-box/search-box.component";

const Homepage = () => {
  const { entireList, filteredCountries, setFilteredCountries, isLoading } =
    useContext(CountriesContext);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);

    setFilteredCountries(filteringCountries(entireList, searchValue));
  };

  return (
    <div className="homepage">
      <h1>Where in the world?</h1>

      <SearchBox
        placehoder="Search for a country..."
        handleChange={handleChange}
      />

      {isLoading ? (
        "...Loading, please wait."
      ) : (
        <CardList countries={searchValue ? filteredCountries : entireList} />
      )}
    </div>
  );
};

export default Homepage;
