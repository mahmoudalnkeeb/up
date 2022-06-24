import React from "react";
import styled from "styled-components";
import { RiNotification4Line } from "react-icons/ri";

const CSS_VARIABLE = (value) => {
  return getComputedStyle(document.documentElement).getPropertyValue(value);
};

const Notifications = styled.div`
  position: relative;
  min-height: ${CSS_VARIABLE("--var-header-height")};
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    order: 1;
    width: 10%;
  }
`;
const NotificationsButton = styled.button`
  padding: 0.5rem 0.5rem;
  background: ${CSS_VARIABLE("--var-third-color")};
  border-radius: ${CSS_VARIABLE("--var-border-radius")};
  font-size: 1.3rem;
  color: ${CSS_VARIABLE("--var-secondary-color")};

  &:hover {
    > :first-child {
      transform: rotate(-20deg);
      transition: transform 0.3s ease-out;
    }
  }
`;

const StyledNotifications = (props) => {
  return (
    <Notifications>
      <NotificationsButton type="button" {...props}>
        <RiNotification4Line />
      </NotificationsButton>
      {props.children}
    </Notifications>
  );
};

export default StyledNotifications;
