import { useState, useContext } from "react";
import styled from "styled-components";
import AppContext from "./AppContext";

const Container = styled.div`
  display: flex;
  > * + * {
    margin-left: 16px;
  }
`;

const FilterButton = styled.button`
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) =>
    props.active ? (props) => props.theme.color : "transparent"};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  padding: 4px;
  border-radius: 3px;
  background: none;
`;

const FilterButtons = () => {
  const {
    theme,
    filteredTodos,
    setFilteredTodos,
    filterIndex,
    setFilterIndex,
  } = useContext(AppContext);

  return (
    <Container>
      <FilterButton
        theme={theme}
        onClick={() => setFilterIndex(0)}
        active={filterIndex === 0}
      >
        All
      </FilterButton>
      <FilterButton
        theme={theme}
        onClick={() => setFilterIndex(1)}
        active={filterIndex === 1}
      >
        Active
      </FilterButton>
      <FilterButton
        theme={theme}
        onClick={() => setFilterIndex(2)}
        active={filterIndex === 2}
      >
        Completed
      </FilterButton>
    </Container>
  );
};

export default FilterButtons;
