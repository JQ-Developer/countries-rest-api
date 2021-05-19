import { withRouter } from "react-router-dom";

import "./card.styles.scss";

const Card = ({ country, history, match }) => (
  <div
    className="card-container"
    onClick={() => history.push(`${match.url}${country.name}`)}
  >
    <img src={country.flag} alt={country.name} />
    <h3>{country.name}</h3>
    <p>Population: {country.population}</p>
    <p>Region: {country.region}</p>
    <p>Capital {country.capital}</p>
  </div>
);

export default withRouter(Card);
