import React from "react";
import logoWhite from "../images/whiteLogo.png";
import blackLogo from "../images/blackLogo.png";
// function Logo({ color }) {
//   return (
//     <img src={color === "white" ? logoWhite : blackLogo} alt="white logo" />
//   );
// }

const Logo = ({ color }) => (
  <img src={color === "white" ? logoWhite : blackLogo} alt="white logo" />
);
export default Logo;
