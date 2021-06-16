import { createContext, useState } from "react";

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [showCountry, setCountry] = useState({});

  return (
    <CountriesContext.Provider value={{ showCountry, setCountry }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
