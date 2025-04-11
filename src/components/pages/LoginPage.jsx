import { useState } from "react";

export default function LoginPage() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  return (
    <div>
      <h1>Bienvenue chez nous!</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prenom..."
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}
