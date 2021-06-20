import { useContext, useEffect } from "react";

import { FaArrowLeft } from "react-icons/fa";

import { Link } from "react-router-dom";

import { filteringCountries, borderNames } from "../../utils/utils";

import { CountriesContext } from "../../components/providers/countries.provider";

import "./view.styles.scss";

const ViewPage = ({ match }) => {
  const { showCountry, setCountry, entireList, isLoading } =
    useContext(CountriesContext);

  //Retrives info when page is reloaded or url changes
  useEffect(() => {
    setCountry(filteringCountries(entireList, match.params.country)[0]);
  }, [match.params.country, setCountry, entireList]);

  //Maps info from data array
  const mappingInfo = (country, attribute) => {
    return country[attribute].map((code) => `${code.name} `);
  };

  console.log(showCountry);

  return (
    <div className="view-page">
      <Link to="/" className="back-btn">
        <FaArrowLeft className="icon" />
        Back
      </Link>
      {isLoading ? (
        "...Loading, please wait"
      ) : (
        <div className="view-container">
          <div className="view-image">
            <img src={showCountry.flag} alt={showCountry.name} />
          </div>

          <ul className="view-details">
            <h2 className="title">{showCountry.name}</h2>
            <li className="data">Native Name: {showCountry.nativeName}</li>
            <li className="data">Population: {showCountry.population}</li>
            <li className="data">Region: {showCountry.region}</li>
            <li className="data">Sub Region: {showCountry.subregion}</li>
            <li className="data">Capital: {showCountry.capital}</li>
            <li className="data">
              Top Level Domain: {showCountry.topLevelDomain}
            </li>
            <li className="data">
              Currencies: {mappingInfo(showCountry, "currencies")}
            </li>
            <li className="data">
              Languages: {mappingInfo(showCountry, "languages")}
            </li>
            <li className="borders">
              Border Countries:{" "}
              {borderNames(showCountry, entireList).map((borderCountry) => (
                <Link className="border-link" to={`${borderCountry}`}>
                  <li>{borderCountry}</li>
                </Link>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ViewPage;
