import "./styles.css";
import styled from "styled-components";
import { Nav } from "./components/nav";
import { ImgNav } from "./components/imgNav";
export default function App() {
  const Wrapper = styled.div`
    background-color: black;
    min-height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px) {
      .imgDiv {
        display: none;
      }
       {
        justify-content: center;
      }
    }
  `;

  const FirstInnerWrapper = styled.div`
    display: flex;
    column-gap: 20px;
    justify-content: flex-start;
    padding-left: 20px;
  `;

  const SecondInnerWrapper = styled.div`
    display: flex;
    column-gap: 20px;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10%;
    padding-left: 10%;
    width: 100%;
    @media (max-width: 600px) {
       {
        justify-content: center;
      }
    }
    @media (max-width: 380px) {
       {
        color: red;
        flex-direction: column;
        row-gap: 20px;
        margin: 10%;
      }
    }
  `;
  return (
    <Wrapper className="mainClass">
      <FirstInnerWrapper className="imgDiv">
        <ImgNav src="https://onward.masaischool.com/static/media/Brand-identity_3.ea915f3a.svg"></ImgNav>
      </FirstInnerWrapper>
      <SecondInnerWrapper className="menuDiv">
        <Nav menuName="Try Vedas" cl="blue-back"></Nav>
        <Nav menuName="Learn"></Nav>
        <Nav menuName="Resoures"></Nav>
        <Nav menuName="About"></Nav>
      </SecondInnerWrapper>
    </Wrapper>
  );
}
