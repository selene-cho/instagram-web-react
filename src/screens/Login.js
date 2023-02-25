import { darkModeVar } from "apollo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { isLoggedInVar } from "apollo";

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
    margin-top: 35px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0;
  text-align: center;
  a {
    font-weight: 600;
    margin-left: 5px;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 7px;
  background-color: #fafafa;
  margin-top: 5px;
  border: 0.5px solid rgb(219, 219, 219);
  border-radius: 3px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.input`
  width: 100%;
  padding: 8px 0;
  margin-top: 12px;
  border: none;
  background-color: #0095f6;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  text-align: center;
`;
const Separator = styled.div`
  width: 100%;
  margin: 20px 0 30px 0px;

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

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const ModeChange = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  padding: 10px;
`;

const onSubmit = (event) => {
  event.preventDefault();
  console.log("login click");
  isLoggedInVar(true);
};

function Login() {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <form onSubmit={onSubmit}>
            <Input
              type="email"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <Input type="password" placeholder="비밀번호" />
            <Button type="submit" value="로그인" />
          </form>

          <Separator>
            <div></div>
            <span>또는</span>
            <div></div>
          </Separator>

          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Facebook으로 로그인</span>
          </FacebookLogin>
        </TopBox>
        <BottomBox>
          <span>계정이 없으신가요?</span>
          <Link to="/signup">가입하기</Link>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}

export default Login;

{
  /* <ModeChange>
<button onClick={() => darkModeVar(true)}>Dark Mode</button>
<button onClick={() => darkModeVar(false)}>Light Mode</button>
</ModeChange>
<p>
<a href="#">비밀번호를 잊으셨나요?</a>
</p> */
}
