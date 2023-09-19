import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Action from "../components/Action";
import { Helmet } from "react-helmet";
import rozwoj from "../assets/rozwoj.jpg";

import "./Rozwoj.css";

const Rozwoj = () => {
  return (
    <>
      <Helmet>
        <title>
          Kiedy dziecko potrzebuje pomocy logopedy?
        </title>
        <meta
          name="description"
          content="Zawarty na tej stronie diagram przedstawia prawidłowy rozwój mowy dziecka i sugeruje, kiedy kontakt z logopedą może okazać się niezbędny."
        />
        <meta
          name="keywords"
          content="Logopeda,Kontakt,Umów się na wizytę,Zajęcia logopedyczne,Konsultacja logopedyczna,Terapia mowy"
        />
        <link
          rel="canonical"
          href="https://www.logopeda-czechowice.pl/rozwoj"
        ></link>
      </Helmet>
      <div className="page-container">
        <Navbar />

        <div className="content-container">
          <img src={rozwoj} alt="Prawidłowy rozwój mowy dziecka" />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Rozwoj;
