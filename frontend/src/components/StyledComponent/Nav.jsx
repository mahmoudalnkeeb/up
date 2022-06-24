import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-inline: 0.5rem;
  gap: 0.3rem;
`;

const Nav = (props) => {
  return <StyledNav {...props}>{props.children}</StyledNav>;
};

export default Nav;
