import { useState } from "react";
import { determineWeather } from "./util/determineWeather";
import { Card } from "./components/Card";
import { Temperature } from "./components/Temperature";

export const Example = () => {
  const [card1Temperature, setCard1Temperature] = useState(110);
  const [card2Temperature, setCard2Temperature] = useState(65);
  const [card3Temperature, setCard3Temperature] = useState(30);

  const DELTA = 5;

  const increaseCard1Temperature = () =>
    setCard1Temperature(card1Temperature + DELTA);
  const decreaseCard1Temperature = () =>
    setCard1Temperature(card1Temperature - DELTA);

  const increaseCard2Temperature = () =>
    setCard2Temperature(card2Temperature + DELTA);
  const decreaseCard2Temperature = () =>
    setCard2Temperature(card2Temperature - DELTA);

  const increaseCard3Temperature = () =>
    setCard3Temperature(card3Temperature + DELTA);
  const decreaseCard3Temperature = () =>
    setCard3Temperature(card3Temperature - DELTA);

  return (
    <div className="card-container">
      <Card width={150} height={150} type={determineWeather(card1Temperature)}>
        Card 1 - {determineWeather(card1Temperature)}
        <Temperature deg={card1Temperature} />
        <button onClick={decreaseCard1Temperature}>Decrease</button>
        <button onClick={increaseCard1Temperature}>Increase</button>
      </Card>
      <Card width={200} height={200} type={determineWeather(card2Temperature)}>
        Card 2- {determineWeather(card2Temperature)}
        <Temperature deg={card2Temperature} />
        <button onClick={decreaseCard2Temperature}>Decrease</button>
        <button onClick={increaseCard2Temperature}>Increase</button>
      </Card>
      <Card width={300} height={300} type={determineWeather(card3Temperature)}>
        Card 3- {determineWeather(card3Temperature)}
        <Temperature deg={card3Temperature} />
        <button onClick={decreaseCard3Temperature}>Decrease</button>
        <button onClick={increaseCard3Temperature}>Increase</button>
      </Card>
    </div>
  );
};
