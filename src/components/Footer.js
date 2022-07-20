import React from "react";
import styled from "styled-components";
import logo_white from "../images/whiteLogo.png";
const StyledFooter = styled.footer`
  background-color: #6d6b67;
`;
function Footer() {
  return (
    <StyledFooter>
      <img src={logo_white} alt="footer-logo" />
    </StyledFooter>
  );
}
export default Footer;
