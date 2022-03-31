export const Card = (props) => (
  <img
    height='200px'
    draggable='false'
    onClick={() => checkCards(props)}
    src={`https://cdn.glitch.global/ea0664c0-d61f-4c6d-8c26-898cc8dde304/${getCard(props)}`}
  />
);

function checkCards({ start, setStart, randomCard, id, points, setPoints, fails, setFails, setUpside, setRandom }) {
  if (!start) return;
  
  if (randomCard === Number(id)) {
    setPoints(points + 1);
  } else {
    setFails(fails + 1);
  }

  setUpside(true);
  setRandom(false);
  setStart(false);
}

const cardNames = ['oros.png', 'copas.jpg', 'espadas.jpg'];

function getCard({ id, upwards }) {
  if (!upwards) {
    return 'down.png';
  }

  return cardNames[id];
}
