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
  const { theme, setFilterIndex } = useContext(AppContext);
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <FilterButton
        theme={theme}
        onClick={() => {
          setIndex(0);
          setFilterIndex(0);
        }}
        active={index === 0}
      >
        All
      </FilterButton>
      <FilterButton
        theme={theme}
        onClick={() => {
          setIndex(1);
          setFilterIndex(1);
        }}
        active={index === 1}
      >
        Active
      </FilterButton>
      <FilterButton
        theme={theme}
        onClick={() => {
          setIndex(2);
          setFilterIndex(2);
        }}
        active={index === 2}
      >
        Completed
      </FilterButton>
    </Container>
  );
};

export default FilterButtons;
