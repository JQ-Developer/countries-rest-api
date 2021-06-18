import { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import { filteringCountries } from "../../utils/utils";

import { CountriesContext } from "../../components/providers/countries.provider";

const ViewPage = ({ match }) => {
  const { showCountry, setCountry, entireList, isLoading } =
    useContext(CountriesContext);

  useEffect(() => {
    setCountry(filteringCountries(entireList, match.params.country)[0]);
  }, [match.params.country, setCountry, entireList]);

  return (
    <div className="view-page">
      <Link to="/">Volver</Link>
      {isLoading ? (
        "loading"
      ) : (
        <div className="view-container">
          <div className="view-image">
            <img src={showCountry.flag} alt={showCountry.name} />
          </div>

          <div className="view-details">
            <h2 className="title">{showCountry.name}</h2>
            <div className="data">Native Name: {showCountry.nativeName}</div>
            <div className="data">Population: {showCountry.population}</div>
            <div className="data">Region: {showCountry.region}</div>
            <div className="data">Sub Region: {showCountry.subregion}</div>
            <div className="data">Capital: {showCountry.capital}</div>
            <div className="data">
              Top Level Domain: {showCountry.topLevelDomain}
            </div>
            <div className="data">
              Currencies:{" "}
              {showCountry?.currencies.map((currency) => `${currency.name} `)}
            </div>
            <div className="data">
              Languages: {showCountry?.languages.map((lng) => `${lng.name} `)}
            </div>
          </div>
          <div className="borders">
            Border Countries:{" "}
            {showCountry.borders.map((border) => `${border} `)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPage;
