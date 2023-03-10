import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Wrapper = styled.div`
  max-width: 350px;
  width: 100vw;
`;
const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
`;
const TopBox = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0;
  text-align: center;
  a {
    margin-left: 8px;
    text-decoration: none;
    color: #42a5f5;
  }
`;
const FormText = styled.div`
  color: rgb(142, 142, 142);
  font-weight: 600;
  width: 80%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const FacebookLogin = styled.div`
  width: 100%;
  color: white;
  background-color: #0095f6;
  border-radius: 3px;
  padding: 7px 16px;
  margin: 7px auto;
  text-align: center;

  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;
const Separator = styled.div`
  width: 100%;
  margin: 10px 0;

  display: flex;
  justify-content: center;

  div {
    width: 100%;
    height: 1px;
    background-color: lightgrey;
    margin: 8px auto;
  }

  span {
    width: 50%;
    text-align: center;
    margin: 0px 5px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #fafafa;
  margin-top: 10px;
  border: 0.5px solid rgb(219, 219, 219);
  border-radius: 3px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;
const More = styled.div`
  font-size: 12px;
  text-align: center;
  margin: 8px auto;
  color: #8e8e8e;

  a {
    text-decoration: none;
    color: #283593;
  }
`;
const Button = styled.button`
  padding: 8px 0;
  margin-top: 12px;
  width: 100%;
  border: none;
  background-color: #47afff;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  text-align: center;
`;
const Footer = styled.div`
  text-align: center;
  margin: 15px auto;
`;

function SignUp() {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <form>
            <FormText>
              <p>???????????? ????????? ???????????? ????????? ???????????????</p>
            </FormText>
            <FacebookLogin>
              <FontAwesomeIcon icon={faFacebookSquare} />
              <span>Facebook?????? ?????????</span>
            </FacebookLogin>
            <Separator>
              <div></div>
              <span>??????</span>
              <div></div>
            </Separator>
            <Input type="email" placeholder="????????? ?????? ?????? ????????? ??????" />
            <Input type="text" placeholder="??????" />
            <Input type="text" placeholder="????????? ??????" />
            <Input type="password" placeholder="????????????" />
            <More>
              <p>
                ?????? ???????????? ???????????? ????????? ???????????? ????????? ????????? Instagram???
                ??????????????? ?????? ????????????. <a href="#">??? ????????????</a>
              </p>
            </More>
            <Button type="submit" value="Sign In">
              ??????
            </Button>
          </form>
        </TopBox>
        <BottomBox>
          <span>????????? ????????????????</span>
          <Link to="/login">?????????</Link>
        </BottomBox>
        <Footer>
          <p>?????? ?????????????????????.</p>
        </Footer>
      </Wrapper>
    </Container>
  );
}

export default SignUp;
