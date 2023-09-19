import "./Offer.css"

const OfferData = (props) => {
  return (
    <div className="o-card">
        <div className="o-image">
            <img src={props.image} alt="oferta-zdjecie" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
    </div>
  )
}

export default OfferData