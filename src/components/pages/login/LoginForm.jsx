import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import TextInput from "../../reusable-ui/TextInput";

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
      <div>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prenom"}
          required
          Icon={<BsPersonCircle className="input-icon" />}
        />

        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="button-icon" />}
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px ${theme.spacing.lg};
  max-width: 500px;
  min-width: 400px;
  font-family: "Amatic SC", sans-serif;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
    margin-top: 32px;
    width: 400px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .button-icon {
    margin-left: 10px;
  }
`;
