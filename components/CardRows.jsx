import { Card } from './Card.jsx';

const { Fragment, useEffect } = React;

export const CardRows = (props) => {
  const ids = shuffleCards(props);
  useEffect(() => {
    props.setRandom(false);
    props.setCards(ids);
  });
  return (
    <Fragment>
      <Card id={ids[0]} upwards={props.upside} {...props} />
      <Card id={ids[1]} upwards={props.upside} {...props} />
      <Card id={ids[2]} upwards={props.upside} {...props} />
    </Fragment>
  )
}

function shuffleCards({ cards, random, start }) {

  if (!random || !start) return cards;

  const array = [...cards];

  // https://stackoverflow.com/a/12646864
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
