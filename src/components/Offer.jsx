import "./Offer.css";
import OfferData from "./OfferData";
import therapy2Image from "../assets/therapy2.jpg";
import therapy3Image from "../assets/therapy3.jpg";
import therapy4Image from "../assets/therapy4.jpg";
import Action from "./Action";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <h1>Oferta zajęć</h1>
        <div className="offercard">
          <OfferData
            image={therapy2Image}
            heading="Diagnoza logopedyczna"
            text="Nasza konsultacja wstępna ma na celu zrozumienie Twoich potrzeb i celów. W trakcie tej sesji omówimy Twoje wyzwania, odpowiemy na wszelkie pytania i przedstawimy spersonalizowany plan na Twoją podróż terapii mowy. "
          />
          <OfferData
            image={therapy3Image}
            heading="Terapia logopedyczna"
            text="Ten rodzaj zajęć ma na celu pomóc Ci zdobyć umiejętności i pewność siebie potrzebne do efektywnej komunikacji w różnych sytuacjach."
          />
          {/* <OfferData image={therapy4Image}
        heading="Kinezjotaping"
        text="" /> */}
        </div>
      </div>
      <Action 
      first="Zadzwoń pod numer "
      second="Lub napisz na "
      // third='Lub skorzystaj z zakładki "Kontakt" :)'
      />
    </>
  );
};

export default Offer;
