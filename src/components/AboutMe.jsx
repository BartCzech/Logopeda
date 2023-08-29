import "./AboutMe.css";

import React from "react";

const AboutMe = () => {
  return (
    <div className="about-container">
      <h1>mgr Wioletta Czech</h1>
      <p>
        Jestem logopedą i filologiem polskim. Swą wiedzę nieustannie poszerzam
        na licznych szkoleniach logopedycznych. Jestem również certyfikowanym
        terapeutą miofunkcjonalnym.{" "}
      </p>
      <p>
        Zajmuję się terapią wad wymowy dzieci w wieku przedszkolnym i szkolnym.{" "}
      </p>
      <p>
        Moim celem jest dostarczenie skutecznej i dostosowanej terapii dla
        każdego pacjenta. Największą satysfakcję sprawia mi postęp w terapii,
        kiedy można zaobserwować, że trud zarówno mojego pacjenta, jak i mój
        przynosi pożądane efekty.
      </p>
      <p>
        Każda osoba ma unikalne potrzeby i cele, dlatego pracuję indywidualnie
        nad poprawą wymowy, artykulacji i innych aspektów mowy.{" "}
      </p>
      <p>
        Jeśli szukasz wsparcia w poprawie mowy, terapii dla swojego dziecka lub
        rozwoju umiejętności komunikacyjnych, zapraszam do skontaktowania się ze
        mną. Razem ustalimy cele terapii i stworzymy plan dostosowany do Twoich
        potrzeb.
      </p>
      <p style={{ paddingBottom: '2rem' }}>Zapraszam do współpracy!</p>

      <h1>Odbyte kursy i szkolenia:</h1>
      <p>•	Terapia miofunkcjonalna w wieku 9-99 lat ze specjalną terapią zaburzeń artykulacyjnych głosek s/sz wg A. Kittel.</p>
      <p>•	Rotacyzm – diagnoza i efektywna terapia logopedyczna.</p>
      <p>•	Ankyloglosja – terapia przed i po zabiegu.</p>
      <p>•	Seplenienie międzyzębowe – diagnoza, metody korekcji, terapia na podstawie głosek szeregu syczącego.</p>
      <p>•	Mowa bezdźwięczna.</p>
      <p>•	Trzy szeregi – głoski dentalizowane – diagnoza i terapia.</p>
      <p>•	Dyslalia – terapia głosek.</p>
      <p>•	Jąkanie – od teorii do praktyki.</p>
    </div>
  );
};

export default AboutMe;
