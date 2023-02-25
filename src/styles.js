import { createGlobalStyle } from "styled-components";

/* npm i styles-reset */
import reset from "styles-reset";

// 전역으로 쓸 변수 만듦

export const lightTheme = {
  fontColor: "rgb(38, 38, 38)",
  bgColor: "#FAFAFA",
  borderColor: "gray",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#000",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  input{
    all: unset;
  }
  body{
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.bgColor};
  }
`;

// ; 잊지 말고 입력!!
