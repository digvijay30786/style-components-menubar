import styled from "styled-components";
const Menu = styled.div`
  nav {
    color: white;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 80%;
  }
  .blue-back {
    background-color: #01bcd4;
    padding: 7px;
    border-radius: 8px;
  }
`;
export function Nav(props) {
  return (
    <Menu>
      <nav className={props.cl}>{props.menuName}</nav>
    </Menu>
  );
}
