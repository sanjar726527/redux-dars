import styled from "styled-components";

const HeaderWrapper = styled.header`
  ${(props) => {
    if (props.theme === "dark") return `background-color:black;`;
  }}
`;

export default HeaderWrapper;
