import { CardRows } from './CardRows.jsx';
import { StartButton } from './StartButton.jsx';
import { ResetButton } from './ResetButton.jsx';

const { StrictMode, useState } = React;

export const App = () => {
  const [start, setStart] = useState(false);
  const [points, setPoints] = useState(0);
  const [fails, setFails] = useState(0);
  const [random, setRandom] = useState(false);
  const [upside, setUpside] = useState(false);
  const [randomCard, setRandomCard] = useState(null);
  const [cards, setCards] = useState([0, 1, 2]);
  
  const props = { start, setStart, points, setPoints, fails, setFails, random, setRandom, upside, setUpside, randomCard, setRandomCard, cards, setCards };

  return (
    <StrictMode>
      <h1>Cartas</h1>
      <CardRows {...props} />
      <h2>Puntos: {points}</h2>
      <h3>Fallos: {fails}</h3>
      <StartButton {...props} />
      <br />
      <br />
      <ResetButton {...props} />
    </StrictMode>
  );
};
