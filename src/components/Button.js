import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
const commonStyles = ` 
background-color: #1f1f1f;
  color: #fff;
  font-size: 18px;
  line-height: 1.56;
  padding: 8px 32px;
  border-radius: 4px;
  :hover {
    background-color: #fff;
    color: red;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
const StyledButton = styled.button`
  ${commonStyles};
`;
const StyledLinkButton = styled.a`
  ${commonStyles}
  text-decoration: underline;
`;
export function Button({ type, label, handleClick }) {
  return (
    <StyledButton type={type || "button"} onClick={handleClick}>
      {label}
    </StyledButton>
  );
}
export function IconButton({ iconId }) {
  return (
    <StyledButton>
      <Icon />
    </StyledButton>
  );
}
export function Link({ path, label, handleClick }) {
  return (
    <StyledLinkButton href={path || ``} onClick={handleClick}>
      {label}
    </StyledLinkButton>
  );
}
