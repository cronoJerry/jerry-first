import styled from "styled-components";
import { GlobalStyles } from "./styles";

const ContainerImage = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background: rgba(0, 0, 0, 0.6);
  }
`;
const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const MainTitle = styled.div`
  position: absolute;
  width: 500px;
  text-align: center;
  font-size: 50px;
  color: white;
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);
`;
const SubTitle = styled.div`
  font-size: 40px;
  margin-top: 20px;
  text-align: center;
`;
export default function MainImage() {
  return (
    <div>
      <GlobalStyles />
      <ContainerImage>
        <MainImg src="https://cdn.pixabay.com/photo/2023/04/04/00/51/sunset-7898136_960_720.jpg"></MainImg>
        <MainTitle>
          <div>영진 직업 전문 학교</div>
          <SubTitle>취업률 전국 최고</SubTitle>
        </MainTitle>
      </ContainerImage>
    </div>
  );
}
