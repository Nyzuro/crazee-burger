import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Profile({ username }) {
  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Hey, <b>{username}</b>
        </p>
        <Link to="/">
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.primary};
      }
    }
  }

  a {
    text-decoration: none;
    .description {
      :hover {
        text-decoration: underline;
        color: ${theme.colors.greyDark};
      }
      small {
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.XXS};
      }
    }
  }

  .picture {
    font-size: ${theme.fonts.size.P4};
    display: flex;
    align-items: center;
    color: ${theme.colors.greyBlue};
  }
`;
