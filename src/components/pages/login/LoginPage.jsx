import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
