# **Instagram-web-react**

## **git settings**

git init<br>
git remote add origin [git에서 new repository 생성 후 url 복붙]<br>
git add .<br>
git commit -m "커밋할 메세지"<br>
git push origin master<br>
<br>

## **Library list**

npm i styled-components<br>
npm i react-hook-form<br>
npm i react-router-dom<br>
<br>
npm i @fortawesome/fontawesome-svg-core<br>
npm i @fortawesome/free-solid-svg-icons<br>
npm i @fortawesome/react-fontawesome<br>
-> fortawesome 안된 경우 : npm i react-icons<br>
<br>
npm i -g apollo<br><br>

Reactive variable
→

- styled-components
  javascript 안에서 CSS 작성
  컴포넌트 기반 화면개발
  const Title = styled.h1`` (백틱)안에 css 작성

## Initialize React

아래 두 파일만 남겨 놓고 모두 삭제

**App.js**

```javascript
function App() {
  return <div>Hello, World!</div>;
}

export default App;
```

**index.js**

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**.prettierignore** 파일 추가

```
*.html, *.js
```

<hr>

## todo

- folder structure

  - components
  - screens

- screens function make

  - Login
  - SignUp
  - Home
  - Profile

- jsconfig.json 파일 만들어서 절대경로 지정

```js
  {
  "compilerOptions": {
  "baseUrl": "src" // src 폴더 기준
  },
  "include": ["src"]
  }
```

- App.js 에 router settings
  → 제일 먼저 셋팅해줘야 나중에 작업 편해짐
  → 나중에 로그인 하지 않은 상태에서는 login 못들어가게 하는 작업 등.. 필요
  →

  ```javascript
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  // 컴포넌트 import
  import Login from "./screens/Login";
  import Home from "./screens/Home";
  import Profile from "./screens/Profile";
  import SignUp from "./screens/SignUp";
  // routes import
  import routes from "./routes";
  // styled library
  import { ThemeProvider } from "styled-components";
  → <ThemeProvide> 로 미리 감싸주기

  const lightTheme = {
    fontColor: "#c2c2c2",
    bgColor: "lightgray",
  };

  const darkTheme = {
    fontColor: "lightgray",
    bgColor: "#c2c2c2",
  };

  function App() {
    const isLoggedIn = false; // 로그인 되어있지 않으면 아래 삼항 연산자/ Home 되어있으면 Login페이지

    return (
      <Router>
        <Routes>
          // [1. path 기본 구조 작성]
          // <Route path="/" element={<Login />} />
          // <Route path="/home" element={<Home />} />
          // <Route path="/signup" element={<SignUp />} />
          // <Route path="/profile" element={<Profile/>} />

          // 로그인 되어있으면 Home, 되어있지 않으면 Login 페이지
          // routes 파일에 만들어 줬던 url 이용해서 path 작성 {routes.~~~}
          <Route path={routes.home} element={isLoggedIn ? <Home /> : <Login />} />
          <Route path={routes.profile} element={<Profile />} />
          // 로그인 되어 있으면 아무것도 X 그자리 그대로, 로그인 되어있지 않으면 SignUp 페이지로
          <Route path={routes.signUp} element={isLoggedIn ? null : <SignUp />} />
        </Routes>
      </Router>
    );
  }

  export default App;
  ```

- screens 안 file에 기본 구조 만들어 주기

  ```javascript
  function Home() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }

  export default Home;
  ```

- routes 파일안에 url 경로 만들어 놓으면 나중에 한눈에 볼 수 있음

```js
const routes = {
  home: "/",
  signUp: "signup",
  profile: "signup",
};
export default routes;
```
