const { Fragment } = React;

export const ResetButton = (props) => (
  <Fragment>
    {!props.start && props.points + props.fails ?
      <button onClick={() => reset(props)}>Reiniciar</button> :
    null}
  </Fragment>
)

function reset(props) {
  props.setStart(false);
  props.setPoints(0);
  props.setFails(0);
  props.setRandom(false);
  props.setUpside(false);
  props.setRandomCard(null);
  props.setCards([0, 1, 2]);
}
