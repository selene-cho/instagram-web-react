import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
/* styled-component */
import { ThemeProvider } from "styled-components";

/* apollo - reactive variables */
// 전역으로 선언해주기 위함
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar, darkModeVar } from "./apollo";
// ./이 없으면 생라이브러리 node_modules에서 불러온다는 뜻이니까 우리가 만든 변수 불러오게하기 위해 ./ 쓰는 것 잊지 말자
import { lightTheme, darkTheme, GlobalStyles } from "./styles";

import Layout from "./components/Layout";

function App() {
  // 변수 담아 줌
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path={routes.home}
            element={
              isLoggedIn ? (
                <Layout>
                  <Home />
                </Layout>
              ) : (
                <Login />
              )
            }
          />
          <Route
            path={routes.profile}
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path={routes.signUp}
            element={isLoggedIn ? null : <SignUp />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
