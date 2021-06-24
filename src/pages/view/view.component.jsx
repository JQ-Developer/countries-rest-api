import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { filteringCountries, borderNames } from "../../utils/utils";

import { CountriesContext } from "../../components/providers/countries.provider";
import { ThemeContext } from "../../components/providers/theme.provider";

import { FaArrowLeft } from "react-icons/fa";
import "./view.styles.scss";

const ViewPage = ({ match }) => {
  const { showCountry, setCountry, entireList, isLoading } =
    useContext(CountriesContext);
  const { isDarkMode } = useContext(ThemeContext);

  //Retrives info when page is reloaded or url changes
  useEffect(() => {
    setCountry(filteringCountries(entireList, match.params.country)[0]);
  }, [match.params.country, setCountry, entireList]);

  //Maps info from data array and add a ","
  const mappingInfo = (country, attribute) => {
    return country[attribute].map((code) => code.name).join(", ");
  };

  return (
    <section className={`view-page-container ${isDarkMode && "is-dark-mode"}`}>
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
              <img
                className="image"
                src={showCountry.flag}
                alt={showCountry.name}
              />
            </div>

            <div className="view-details">
              <h2 className="title">{showCountry.name}</h2>
              <ul className="li-1">
                <li className="data">
                  <strong>Native Name: </strong>
                  {showCountry.nativeName}
                </li>
                <li className="data">
                  <strong>Population: </strong>
                  {showCountry.population.toLocaleString()}
                </li>
                <li className="data">
                  <strong>Region: </strong>
                  {showCountry.region}
                </li>
                <li className="data">
                  <strong>Sub Region: </strong>
                  {showCountry.subregion}
                </li>
                <li className="data">
                  <strong>Capital: </strong>
                  {showCountry.capital}
                </li>
              </ul>

              <ul className="li-2">
                <li className="data">
                  <strong>Top Level Domain: </strong>
                  {showCountry.topLevelDomain}
                </li>
                <li className="data">
                  <strong>Currencies: </strong>
                  {mappingInfo(showCountry, "currencies")}
                </li>
                <li className="data">
                  <strong>Languages: </strong>
                  {mappingInfo(showCountry, "languages")}
                </li>
              </ul>
              <li className="borders">
                <h3 className="border-title">
                  <strong>Border Countries: </strong>
                </h3>
                <ul className="links-container">
                  {showCountry.borders.length === 0 ? (
                    <p>Island</p>
                  ) : (
                    borderNames(showCountry, entireList).map(
                      (borderCountry) => (
                        <Link className="border-link" to={`${borderCountry}`}>
                          <li>{borderCountry}</li>
                        </Link>
                      )
                    )
                  )}
                </ul>
              </li>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ViewPage;
