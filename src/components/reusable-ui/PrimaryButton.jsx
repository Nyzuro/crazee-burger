import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon, ...extraProps }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  width: 400px;
  height: 55px;
  background-color: #ff9f1b;
  border-radius: 5px;
  border-width: 0;
  color: white;

  &:hover {
    background-color: ${theme.colors.white};
    border: 1px solid #ff9f1b;
    color: #ff9f1b;
    cursor: pointer;
  }

  &:active {
    background-color: #ff9f1b;
    color: white;
  }
`;
