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
            text="Konsultacja wstępna ma na celu rozpoznanie problemu, z którym boryka się pacjent.
            Logopeda podczas diagnozy dokonuje oceny rozwoju mowy dziecka i rozpoznaje wszelkie
            nieprawidłowości pojawiające się w procesie komunikacji. Poprzez dokonanie trafnej
            diagnozy określa charakter zaburzenia i jest w stanie znaleźć jego przyczynę, dostosować
            odpowiednią terapię oraz stwierdzić, jakie są rokowania na przyszłość."
            text2="Odpowiednia diagnoza, zrozumienie potrzeb dziecka jest punktem wyjścia do
            kolejnych działań, których celem jest profesjonalna pomoc dziecku. Wszystko po to, aby jak
            najprecyzyjniej dobrać metody pracy z małym pacjentem i przygotować spersonalizowany
            plan na jego podróż terapii mowy."
          />
          <OfferData
            image={therapy3Image}
            heading="Terapia logopedyczna"
            text="Ten rodzaj zajęć pozwoli kompensować zaburzenia i deficyty mowy. Zajęcia
            prowadzone są zgodnie z indywidualnym programem terapii, opracowanym na podstawie
            fachowej diagnozy pacjenta. W trakcie sesji wykonywane są ćwiczenia – artykulacyjne,
            słuchowe, fonacyjne oraz oddechowe, a dzieci mogą utrwalić prawidłowe wzorce mowy."
            text2="Dzięki terapii Pacjenci usprawniają motorykę narządów artykulacyjnych, uczą się
            artykulacji prawidłowych wzorców głosek,  poprawiają wydolność oddechową, poszerzają
            zasób słownictwa, doskonalą umiejętność budowy zdań, poprawiają płynność mówienia oraz
            doskonalą umiejętności ogólnorozwojowe."
          />
          {/* <OfferData image={therapy4Image}
        heading="Kinezjotaping"
        text="" /> */}
        </div>
      </div>
    </>
  );
};

export default Offer;
