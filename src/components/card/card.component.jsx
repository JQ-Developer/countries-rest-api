import { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { CountriesContext } from "../providers/countries.provider";

import "./card.styles.scss";

const Card = ({ country }) => {
  const { setCountry } = useContext(CountriesContext);

  return (
    <Link
      to={`${country.name}`}
      className="card-container"
      onClick={() => {
        setCountry(country);
      }}
    >
      <img src={country.flag} alt={country.name} />
      <h3>{country.name}</h3>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital {country.capital}</p>
    </Link>
  );
};

export default withRouter(Card);
