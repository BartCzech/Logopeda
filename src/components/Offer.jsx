import "./Offer.css";
import OfferData from "./OfferData";
import therapy2Image from "../assets/therapy2.jpg";
import therapy3Image from "../assets/therapy3.jpg";
import therapy4Image from "../assets/therapy4.jpg";

const Offer = () => {
  return (
    <div className="offer">
      <h1>Oferta</h1>
      <p>Możesz ze mną odbywać następujące zajęcia:</p>
      <div className="offercard">
        <OfferData image={therapy2Image}
        heading="Diagnoza logopedyczna"
        text="Nasza bezpłatna konsultacja wstępna ma na celu zrozumienie Twoich potrzeb i celów. W trakcie tej sesji omówimy Twoje wyzwania, odpowiemy na wszelkie pytania i przedstawimy spersonalizowany plan na Twoją podróż terapii mowy. Pracujmy razem, aby odblokować Twój pełny potencjał w komunikacji!" />
        <OfferData image={therapy3Image}
        heading="Terapia logopedyczna"
        text="Ten rodzaj lekcji został stworzony, aby pomóc Ci zdobyć umiejętności i pewność siebie potrzebne do efektywnej komunikacji w różnych sytuacjach. Ten kompleksowy pakiet obejmuje spersonalizowane sesje indywidualne, dostosowane ćwiczenia i praktyczne strategie. Niezależnie czy chcesz doskonalić sztukę publicznego przemawiania, relacji społecznych czy komunikacji zawodowej, jesteśmy tutaj, aby Cię prowadzić na każdym etapie." />
        {/* <OfferData image={therapy4Image}
        heading="Kinezjotaping"
        text="" /> */}
      </div>
    </div>
  );
};

export default Offer;
