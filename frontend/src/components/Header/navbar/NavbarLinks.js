import React from "react";
import styled from "styled-components";

const CSS_VARIABLE = (value) => {
  return getComputedStyle(document.documentElement).getPropertyValue(value);
};

const StyledNavbarLink = styled.a`
  position: relative;
  width: 45px;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${CSS_VARIABLE("--var-secondary-color")};
  font-size: 1.8rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${CSS_VARIABLE("--var-icon-background")};
    border-radius: ${CSS_VARIABLE("--var-border-radius")};
  }

  > * {
    position: relative;
    z-index: 5;
    transition: color 0.3s ease-out;

    &:hover {
      color: ${CSS_VARIABLE("--var-text-color")};
    }
  }
`;

const NavbarLinks = (props) => {
  return <StyledNavbarLink {...props}>{props.children}</StyledNavbarLink>;
};

export default NavbarLinks;
