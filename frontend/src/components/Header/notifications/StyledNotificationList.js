import React from "react";
import styled from "styled-components";

const CSS_VARIABLE = (value) => {
  return getComputedStyle(document.documentElement).getPropertyValue(value);
};

const NotificationsList = styled.ul`
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  min-width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  border-radius: ${CSS_VARIABLE("--var-border-radius")};
  background: ${CSS_VARIABLE("--var-post-color")};
  box-shadow: 0 0 7px ${CSS_VARIABLE("--var-shadow-color")};
  overflow: auto;
`;

const StyledNotificationList = (props) => {
  return (
    <NotificationsList
      style={props.showNotify ? { display: "flex" } : { display: "none" }}
      {...props}
    >
      {props.children}
    </NotificationsList>
  );
};

export default StyledNotificationList;
