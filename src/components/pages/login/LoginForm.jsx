import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous!</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prenom..."
        value={inputValue}
        onChange={handleChange}
        required
      />
      <Link to={"/order"}>
        <button>Accéder à votre espace</button>
      </Link>
    </form>
  );
}
