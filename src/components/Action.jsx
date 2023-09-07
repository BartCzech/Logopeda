import "./Action.css";

const Action = (props) => {
  return (
    <div className="main">
      <h2>{props.first} <a href="tel:600377044">600377044</a></h2>
      <h2>{props.second} <a href="mailto:biuro@logopeda-czechowice.pl">biuro@logopeda-czechowice.pl</a></h2>
      <h2>{props.third}</h2>
    </div>
  )
}

export default Action