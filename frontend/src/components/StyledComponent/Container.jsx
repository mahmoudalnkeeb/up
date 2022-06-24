import React from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  display: flex;
  ${(props) => props.column && "flex-direction: column"};
  ${(props) => props.row && "flex-direction:row"};
  gap: 1rem;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 640px) {
    max-width: 640px;
    padding-right: 8px;
    padding-left: 8px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding-right: 3rem;
    padding-left: 3rem;
  }
`;

const Container = (props) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
