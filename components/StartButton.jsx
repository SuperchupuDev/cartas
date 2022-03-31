const imageMap = ['el oro', 'la copa', 'la espada'];

export const StartButton = ({ randomCard, points, fails, start, ...props }) => {
  return (
    start ?
      `Selecciona ${imageMap[randomCard]}`
    :
      <button onClick={() => onStartClick(props)}>
        {points + fails ? 'Continuar' : 'Empezar'}
      </button>
  )
}

function onStartClick({ setStart, setUpside, setRandom, setRandomCard }) {
  setRandom(true);
  setStart(true);
  setUpside(false);
  setRandomCard(getRandomInt());
}

function getRandomInt() {
  return Math.floor(Math.random() * (3 - 0)) + 0;
}
