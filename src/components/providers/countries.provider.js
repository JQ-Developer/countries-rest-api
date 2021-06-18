import { createContext, useState } from "react";

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  //Sets the country for viewPage
  const [showCountry, setCountry] = useState({});
  //Sets the whole list of countries
  const [entireList, setEntireList] = useState([]);
  //Filtering countries by name
  const [filteredCountries, setFilteredCountries] = useState([]);
  //Loading
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CountriesContext.Provider
      value={{
        showCountry,
        setCountry,
        entireList,
        setEntireList,
        filteredCountries,
        setFilteredCountries,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
