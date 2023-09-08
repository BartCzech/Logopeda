import exerciseImage from "../assets/exercise.jpg";
import exercise2Image from "../assets/exercise2.jpg";
import therapy5Image from "../assets/therapy5.jpg";
import therapy6Image from "../assets/therapy6.jpg";
import "./Value.css";
import ValueData from "./ValueData";

const Value = () => {
  return (
    <div className="value">
      {/* <h1>Jak mogę pomóc Twojemu dziecku?</h1> */}
      {/* <p>Uczęszczając na zajęcia ze mną, możesz liczyć na długoterminowe:</p> */}
      <ValueData
        className="first-des"
        heading="Pomoc logopedyczna dla dzieci"
        text="Jeśli Twoje dziecko ma trudności w wymawianiu pewnych dźwięków lub sylab, jestem tutaj, aby pomóc. Specjalistyczne ćwiczenia i techniki logopedyczne poprawią wymowę i wyraźność Twojego dziecka."
        img1={therapy5Image}
        img2={exercise2Image}
      />
      <ValueData
        className="first-des-reverse"
        heading="Rozwój płynnej mowy u dziecka"
        text="Oferuję kompleksową pomoc logopedyczną dla dzieci, aby wspomóc holistycznie ich rozwój mowy. Zadbam o to, aby Twoje dziecko osiągnęło zdecydowane i płynne wyrażanie siebie na co dzień."
        img1={exerciseImage}
        img2={therapy6Image}
      />
    </div>
  );
};

export default Value;
