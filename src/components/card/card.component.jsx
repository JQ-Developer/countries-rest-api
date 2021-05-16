import "./card.styles.scss";

export const Card = ({ country }) => (
  <div className="card-container">
    <img src={country.flag} alt={country.name} />
    <h3>{country.name}</h3>
    <p>Population: {country.population}</p>
    <p>Region: {country.region}</p>
    <p>Capital {country.capital}</p>
  </div>
);
