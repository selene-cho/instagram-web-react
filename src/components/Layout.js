import styled from "styled-components";
import Header from "./Header";

const Content = styled.div`
  max-width: 630px;
  margin 0 auto;
  margin-top: 25px;
  width: 100%;
`;

function Layout({ children }) {
  console.log(children);

  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
export default Layout;
