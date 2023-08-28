import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h1>Wyślij mi wiadomość!</h1>
      <form action="">
        <input placeholder="Imię" />
        <input placeholder="Email" />
        <input placeholder="Tytuł" />
        <textarea placeholder="Wiadomość" rows="4"></textarea>
        <button>Wyślij wiadomość</button>
      </form>
    </div>
  );
};

export default ContactForm;
