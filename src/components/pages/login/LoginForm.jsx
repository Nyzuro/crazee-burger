import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous!</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Entrez votre prenom"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button>Accéder à mon espace</button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 2rem;
  max-width: 500px;
  min-width: 400px;
  font-family: "Amatic SC", sans-serif;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
    margin-top: 32px;
    width: 400px;
  }

  h1 {
    color: white;
    font-size: 48px;
  }

  h2 {
    color: white;
    font-size: 36px;
  }

  input {
    width: 400px;
    height: 55px;
    margin: 18px;
    border-radius: 5px;
    border-width: 0;
  }

  button {
    width: 400px;
    height: 55px;
    background-color: #ff9f1b;
    border-radius: 5px;
    border-width: 0;
    color: white;
  }
`;
