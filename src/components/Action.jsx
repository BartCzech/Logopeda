import "./Action.css";

const Action = (props) => {
  return (
    <div className="main">
      <h2>{props.first}</h2>
      <h2>{props.second}</h2>
      <h2>{props.third}</h2>
    </div>
  )
}

export default Action