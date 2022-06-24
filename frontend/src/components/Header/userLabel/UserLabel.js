import React from "react";
import styled from "styled-components";
import UserImage from "../../../assets/images/user.png";

const CSS_VARIABLE = (value) => {
  return getComputedStyle(document.documentElement).getPropertyValue(value);
};

const StyledUserLabel = styled.div`
  position: relative;
  width: 45px;
  height: ${CSS_VARIABLE("--var-header-height")};
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    max-width: 100%;
    border-radius: ${CSS_VARIABLE("--var-border-radius")};
    padding: 2px;
    cursor: pointer;
    border: 4px solid ${CSS_VARIABLE("--var-third-color")};
    overflow: hidden;
  }

  @media (max-width: 767px) {
    order: 2;
    width: 10%;
  }
`;

const UserLabel = (props) => {
  return (
    <StyledUserLabel {...props}>
      <img src={props.userImage || UserImage} />
      {props.children}
    </StyledUserLabel>
  );
};

export default UserLabel;
