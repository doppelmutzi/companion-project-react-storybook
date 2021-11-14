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
    props.active ? "rgba(175, 47, 47, 0.2)" : "transparent"};
  padding: 4px;
  border-radius: 3px;
  background: none;
`;

const FilterButtons = () => {
  const { filteredTodos, setFilteredTodos, filterIndex, setFilterIndex } =
    useContext(AppContext);

  return (
    <Container>
      <FilterButton
        onClick={() => setFilterIndex(0)}
        active={filterIndex === 0}
      >
        All
      </FilterButton>
      <FilterButton
        onClick={() => setFilterIndex(1)}
        active={filterIndex === 1}
      >
        Active
      </FilterButton>
      <FilterButton
        onClick={() => setFilterIndex(2)}
        active={filterIndex === 2}
      >
        Completed
      </FilterButton>
    </Container>
  );
};

export default FilterButtons;
