import React from "react";
import styled from "styled-components";
import UserImage from "../../../assets/images/user.png";

const CSS_VARIABLE = (value) => {
  return getComputedStyle(document.documentElement).getPropertyValue(value);
};

const NotificationsItems = styled.li`
  min-width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 0.5rem;
  background: ${CSS_VARIABLE("--var-primary-color")};
  list-style: none;
  color: ${CSS_VARIABLE("--var-text-color")};
  overflow: hidden;
  box-shadow: 0 0 6px ${CSS_VARIABLE("--var-shadow-color")};
`;
const NotifyIMG = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    max-width: 100%;
    border-radius: ${CSS_VARIABLE("--var-border-radius")};
  }
`;
const NotifiText = styled.div`
  text-transform: capitalize;
  color: ${CSS_VARIABLE("---var-text-color")};
  > :first-child {
    font-weight: bold;
  }
  > :nth-child(2) {
    font-size: small;
    font-weight: 600;
    opacity: 0.6;
  }
`;

const StyledNotificationItem = (props) => {
  return (
    <NotificationsItems {...props}>
      <NotifyIMG>
        <img src={props.image || UserImage} />
      </NotifyIMG>
      <NotifiText>
        <h4>{props.textContent}</h4>
        <p>{props.date}</p>
      </NotifiText>
    </NotificationsItems>
  );
};

export default StyledNotificationItem;
