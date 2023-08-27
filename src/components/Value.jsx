import exerciseImage from "../assets/exercise.jpg";
import exercise2Image from "../assets/exercise2.jpg";
import exerciseAdultImage from "../assets/exerciseAdult.jpg";
import exerciseAdult2Image from "../assets/exerciseAdult2.jpg";
import "./Value.css";
import ValueData from "./ValueData";

const Value = () => {
  return (
    <div className="value">
      <h1>Co możesz ze mną osiągnąć?</h1>
      <p>Uczęszczając na zajęcia ze mną, możesz liczyć na długoterminowe:</p>
      <ValueData
        className="first-des"
        heading="Trudności w mówieniu we wczesnym wieku"
        text="Jeśli masz trudności w wymawianiu pewnych dźwięków lub sylab, mogę
        Ci pomóc poprzez specjalistyczne ćwiczenia i techniki, które
        poprawią Twoją wymowę i wyraźność."
        img1={exerciseImage}
        img2={exercise2Image}
      />
      <ValueData
        className="first-des-reverse"
        heading="Rozwijanie umiejętności społecznych"
        text="Współpracując ze mną, możesz nauczyć się skutecznych strategii komunikacyjnych w różnych sytuacjach społecznych. Bez względu na wiek czy poziom zaawansowania, skupiamy się na rozwijaniu płynności mowy, klarowności i pewności siebie w mówieniu."
        img1={exerciseAdultImage}
        img2={exerciseAdult2Image}
      />
    </div>
  );
};

export default Value;
