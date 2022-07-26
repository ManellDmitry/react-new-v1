import styled from "styled-components";
import { Logo } from "./Logo";

const StyledFooter = styled.footer`
  background-color: #6d6b67;
  flex: 0 1 auto;
`;

function Footer() {
  return (
    <StyledFooter>
      <Logo />
    </StyledFooter>
  );
}

export default Footer;
