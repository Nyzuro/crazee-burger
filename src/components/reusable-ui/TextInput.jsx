import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: #fff;
  margin: 18px 0px;
  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .input-icon {
    font-size: ${theme.fonts.size.P0};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }

    &:focus-visible {
      outline: none;
    }
  }
`;
