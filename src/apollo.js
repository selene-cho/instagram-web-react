import { makeVar } from "@apollo/client";

// reactive-variables
// -g 전역으로 설치 안하고 client만 설치해도 됨
// → npm i @apollo/client

export const isLoggedInVar = makeVar(false);
// default 값 항상 false - 항상 로그인 안되어 있는게 보안 이슈로 맞음
// make variable apllo 함수
export const darkModeVar = makeVar(false);
