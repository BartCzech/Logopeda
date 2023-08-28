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
        heading="Bezpłatna Konsultacja Wstępna"
        text="Nasza bezpłatna konsultacja wstępna ma na celu zrozumienie Twoich potrzeb i celów. W trakcie tej sesji omówimy Twoje wyzwania, odpowiemy na wszelkie pytania i przedstawimy spersonalizowany plan na Twoją podróż terapii mowy. Pracujmy razem, aby odblokować Twój pełny potencjał w komunikacji!" />
        <OfferData image={therapy3Image}
        heading="Efektywna Komunikacja"
        text="Ten rodzaj lekcji został stworzony, aby pomóc Ci zdobyć umiejętności i pewność siebie potrzebne do efektywnej komunikacji w różnych sytuacjach. Ten kompleksowy pakiet obejmuje spersonalizowane sesje indywidualne, dostosowane ćwiczenia i praktyczne strategie. Niezależnie czy chcesz doskonalić sztukę publicznego przemawiania, relacji społecznych czy komunikacji zawodowej, jesteśmy tutaj, aby Cię prowadzić na każdym etapie." />
        <OfferData image={therapy4Image}
        heading="Zestaw Rozwoju Mowy dla Dzieci"
        text="Zestaw Rozwoju Mowy dla Dzieci – holistyczne podejście do wspierania umiejętności klarownej komunikacji u dzieci. Ten zestaw jest idealny dla rodziców, którzy chcą radzić sobie z opóźnieniami mowy, trudnościami w artykulacji lub rozwoju językowego u swoich maluchów. Nasze sesje prowadzone przez ekspertów są angażujące, oparte na zabawie i zaprojektowane tak, aby nauka była przyjemnością. Zobacz, jak pewność Twojego dziecka rośnie wraz z umiejętnościami komunikacyjnymi!" />
      </div>
    </div>
  );
};

export default Offer;
