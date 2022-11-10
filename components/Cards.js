import cardsData from "../data/data";
import Card from "./Card";

const Cards = () => {
  return (
    <div>
      {cardsData.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;
