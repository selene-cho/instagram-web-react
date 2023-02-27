import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
  border-bottom: 1px solid rgb(219, 219, 219);
  background-color: ${(props) => props.theme.bgColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 930px;
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Column = styled.div``;
const Icon = styled.span`
  margin: 0 10px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Icon>
          <Link to="/">
            <FontAwesomeIcon
              size={"2x"}
              icon={faInstagram}
              style={{ color: "black" }}
            />
          </Link>
        </Icon>
        <Column>
          <IconsContainer>
            <Icon>
              <Link to="/">
                <FontAwesomeIcon
                  size="lg"
                  icon={faHome}
                  style={{ color: "black" }}
                />
              </Link>
            </Icon>
            <Icon>
              <FontAwesomeIcon size="lg" icon={faPaperPlane} />
            </Icon>
            <Icon>
              <Link to="/profile/dahee">
                <FontAwesomeIcon
                  size="lg"
                  icon={faUser}
                  style={{ color: "black" }}
                />
              </Link>
            </Icon>
          </IconsContainer>
        </Column>
      </Wrapper>
    </HeaderContainer>
  );
}
export default Header;
