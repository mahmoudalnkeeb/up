import React from "react";
import styled from "styled-components";

const textColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--var-text-color"
);

const secondaryColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--var-secondary-color");

const hoverColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--var-aside-hover-color"
);

const StyledSideNavText = styled.span`
  color: ${textColor.trim()};
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.1rem;
  letter-spacing: 0.05rem;
  margin-top: auto;
  margin-bottom: auto;
  text-transform: capitalize;

  &:hover {
    color: ${hoverColor};
  }
`;

const SideNavbarText = (props) => {
  return <StyledSideNavText {...props}>{props.children} </StyledSideNavText>;
};

export default SideNavbarText;
