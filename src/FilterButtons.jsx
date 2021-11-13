import { useState, useContext } from "react";
import styled from "styled-components";
import AppContext from "./AppContext";

const Container = styled.div`
  display: flex;
`;

const FilterButton = styled.button`
  background-color: ${(props) => (props.active ? "red" : "green")};
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
