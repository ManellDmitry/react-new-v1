import styled from "styled-components";
import { Logo } from "./Logo";
import Navigation from "./Navigation";

const StyledHeader = styled.header`
  flex: 0 1 auto;
  background: red;
`;
function Header({ x }) {
  return (
    <StyledHeader>
      <Logo color="black" />
      <Navigation links={x} />
    </StyledHeader>
  );
}
export default Header;
