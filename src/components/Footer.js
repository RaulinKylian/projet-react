import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert("Attention, il n'y a pas d'@', ce n'est pas une adresse valide");
    }
  }

  return (
    <footer className="lbm-footer">
      <div className="lbm-footer-elem">Pour les passionné.e.s de musiques</div>
      <div className="lbm-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
      <div className="button-mail">
        <button onClick={(mail) => mail([])}>send</button>
      </div>
    </footer>
  );
}

export default Footer;
