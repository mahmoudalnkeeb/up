import React from "react";
import styled from "styled-components";

const CSS_VARIABLE = (value) => {
  return getComputedStyle(document.documentElement).getPropertyValue(value);
};

const StyledUserActionsList = styled.ul`
  position: absolute;
  z-index: 10;
  top: 100%;
  right: 0;
  display: flex;
  width: 300px;
  height: 450px;
  background: ${CSS_VARIABLE("--var-post-color")};
  box-shadow: 0 0 7px ${CSS_VARIABLE("--var-shadow-color")};
`;

const UserActionsList = (props) => {
  return (
    <StyledUserActionsList
      {...props}
      style={props.showActions ? { display: "flex" } : { display: "none" }}
    >
      {props.children}
    </StyledUserActionsList>
  );
};

export default UserActionsList;
