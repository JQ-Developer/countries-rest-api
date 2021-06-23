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
      <div className="image">
        <img src={country.flag} alt={country.name} />
      </div>
      <div className="information">
        <h3>{country.name}</h3>
        <p>
          <strong>Population: </strong> {country.population}
        </p>
        <p>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Capital </strong>
          {country.capital}
        </p>
      </div>
    </Link>
  );
};

export default withRouter(Card);
