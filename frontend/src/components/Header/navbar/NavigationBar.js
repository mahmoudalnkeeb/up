import React from "react";
import styled from "styled-components";

const CSS_VARIABLE = (value) => {
  return getComputedStyle(document.documentElement).getPropertyValue(value);
};

const StyledNavigationBar = styled.nav`
  width: 320px;
  height: ${CSS_VARIABLE("--var-header-height")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: ${CSS_VARIABLE("--var-header-height")};

  @media (max-width: 767px) {
    order: 4;
    flex: 1 1;
    width: 100%;
  }
`;

const NavigationBar = (props) => {
  return <StyledNavigationBar>{props.children}</StyledNavigationBar>;
};

export default NavigationBar;
