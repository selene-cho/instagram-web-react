# **Instagram-web-react**

## **git settings**

git init<br>
git remote add origin [git에서 new repository 생성 후 url 복붙]<br>
git add .<br>
git commit -m "커밋할 메세지"<br>
git push origin master<br>
<br>

## **Library list**

npm i styled components<br>
npm i react-hook-form<br>
npm i react-router-dom<br>
<br>
npm i @fortawesome/fontawesome-svg-core<br>
npm i @fortawesome/free-solid-svg-icons<br>
npm i @fortawesome/react-fontawesome<br>
-> fortawesome 안된 경우 : npm i react-icons<br>
<br>
npm i -g apollo<br><br>

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
