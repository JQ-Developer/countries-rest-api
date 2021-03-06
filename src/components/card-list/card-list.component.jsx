import Card from "../card/card.component";

import "./card-list.styles.scss";

const CardList = ({ countries }) => {
  return (
    <div className="card-list">
      {countries.map((country) => (
        <Card key={country.alpha2Code} country={country} />
      ))}
    </div>
  );
};

export default CardList;
