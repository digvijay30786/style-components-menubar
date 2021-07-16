import styled from "styled-components";
const Img = styled.img``;
export function ImgNav(props) {
  return <Img src={props.src} alt="Unknow"></Img>;
}
