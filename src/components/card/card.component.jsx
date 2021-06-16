import { useContext } from "react";
import { withRouter } from "react-router-dom";
import { CountriesContext } from "../providers/countries.provider";

import "./card.styles.scss";

const Card = ({ country, history, match }) => {
  const { setCountry } = useContext(CountriesContext);

  return (
    <div
      className="card-container"
      onClick={() => {
        history.push(`${match.url}view/${country.name}`);
        setCountry(country);
      }}
    >
      <img src={country.flag} alt={country.name} />
      <h3>{country.name}</h3>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital {country.capital}</p>
    </div>
  );
};

export default withRouter(Card);
