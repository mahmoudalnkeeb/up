import React from "react";
import styled from "styled-components";

const textColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--var-text-color"
);

const secondaryColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--var-secondary-color");

const StyledSideNavIcons = styled.span`
  font-weight: bold;
  color: #fefefe;
  background-color: ${secondaryColor.trim()};
  font-size: 1.2rem;
  line-height: 2.25rem;
  padding: 8px;
  border-radius: 50%;
`;

const SideNavbarIcons = (props) => {
  return <StyledSideNavIcons {...props}>{props.children}</StyledSideNavIcons>;
};

export default SideNavbarIcons;
