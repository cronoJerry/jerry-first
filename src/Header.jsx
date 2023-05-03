import styled from "styled-components";
import { GlobalStyles } from "./styles";
import Logo from "./apple.png";
const Container = styled.div`
  width: 100%;
  // height: 100vh;
  display: flex;
  justify-content: center;
`;
const GlobalNav = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;
const SmallNav = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
export default function Header() {
  return (
    <div>
      <GlobalStyles />
      <Container>
        <GlobalNav>
          <div>
            <img src={Logo} width="60px"></img>
          </div>
          <SmallNav>
            <div>업체소개</div>
            <div>포트폴리오</div>
            <div>사진</div>
            <div>게시판</div>
            <div>연락처</div>
          </SmallNav>
        </GlobalNav>
      </Container>
    </div>
  );
}
