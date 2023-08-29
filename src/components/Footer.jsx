import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>Logopeda Wioletta Czech</h1>
                <p>Odkryj swój prawdziwy głos!</p>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Gdzie znaleźć gabinet?</h4>
                <p>ul. Chabrowa 4A</p>
                <p>43-502 Czechowice-Dziedzice</p>
            </div>
            <div>
                <h4>Jak się skontaktować?</h4>
                <p>przyklad@gmail.com</p>
                <p>+48 600 377 044</p>
            </div>
            <div>
                <h4>Na skróty</h4>
                <a href="/">Główna</a>
                <a href="/o-mnie">O mnie</a>
                <a href="/zajecia">Zajęcia</a>
                <a href="/kontakt">Kontakt</a>
            </div>
        </div>
        <div className="unterschrift">
            <p>Copyright Bartłomiej Czech 2023</p>
        </div>
    </div>
  )
}

export default Footer