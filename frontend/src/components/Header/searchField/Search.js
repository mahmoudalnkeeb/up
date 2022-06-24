import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import styled from "styled-components";

const CSS_VARIABLE = (value) => {
  return getComputedStyle(document.documentElement).getPropertyValue(value);
};

const SearchWrapper = styled.div`
  position: relative;
  width: 300px;
  height: ${CSS_VARIABLE("--var-header-height")};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    width: 70%;
    order: 2;
  }
`;

const SearchInput = styled.input`
  background: ${CSS_VARIABLE("--var-primary-color")};
  width: 100%;
  height: 40px;
  padding: 0.3rem 0.5rem;
  box-shadow: 0 0 2px ${CSS_VARIABLE("--shadow-color")};
  border-top-right-radius: ${CSS_VARIABLE("--var-border-radius")};
  border-bottom-right-radius: ${CSS_VARIABLE("--var-border-radius")};

  &:focus {
    outline: none;
    border: none;
    background-color: initial;
  }
`;

const SearchButton = styled.button`
  width: 55px;
  height: 40px;
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 2px ${CSS_VARIABLE("--shadow-color")};
  border-top-left-radius: ${CSS_VARIABLE("--var-border-radius")};
  border-bottom-left-radius: ${CSS_VARIABLE("--var-border-radius")};

  > :first-child {
    font-size: 1.5rem;
    color: ${CSS_VARIABLE("--var-secondary-color")};
    transition: color 0.3s ease-out;

    &:hover {
      color: ${CSS_VARIABLE("--var-text-color")};
    }
  }
`;

const Search = (props) => {
  return (
    <SearchWrapper {...props}>
      <SearchButton type="button">
        <BiSearchAlt />
      </SearchButton>
      <SearchInput type="search" />
      {props.children}
    </SearchWrapper>
  );
};

export default Search;
