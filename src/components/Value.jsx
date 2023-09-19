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
        text="Prawidłowy rozwój umiejętności językowych i komunikacyjnych dziecka wpływa na
        jego funkcjonowanie w społeczeństwie, zwiększa pewność siebie, pozwala mu realizować
        pasje, marzenia oraz odnajdować się w grupie."
        text2="Rozwój każdego dziecka przebiega indywidualnie. Jednak wszystkie umiejętności
        powinny być przez dziecko zdobywane w określonych ramach czasowych. Każde opóźnienie
        w stosunku do ogólnie przyjętej normy może wskazywać na jego nieharmonijny rozwój."
        img1={therapy5Image}
        img2={exercise2Image}
      />
      <ValueData
        className="first-des-reverse"
        heading="Rozwój płynnej mowy u dziecka"
        text="Rodzice często wahają się, czy ich obawy co do rozwoju mowy dziecka są słuszne.
        Zastanawiają się, kiedy udać się z dzieckiem na konsultację do logopedy. Jeśli cokolwiek
        niepokoi Państwa w mowie Waszego dziecka (mówi niewyraźnie, ma mały zasób słownictwa,
        posiada niewyraźną artykulację, itp.) jak najszybciej zgłoście się na badanie logopedyczne.
        Terapię logopedyczną należy rozpocząć jak najszybciej, zanim nieprawidłowa wymowa
        utrwali się na dobre."
        img1={exerciseImage}
        img2={therapy6Image}
      />
    </div>
  );
};

export default Value;
