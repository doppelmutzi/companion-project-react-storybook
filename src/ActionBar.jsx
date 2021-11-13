import { useContext } from "react";
import styled from "styled-components";
import Status from "./Status";
import FilterButtons from "./FilterButtons";
import ClearButton from "./ClearButton";
import AppContext from "./AppContext";

const Container = styled.div`
  display: flex;
`;

const ActionBar = () => {
  const { todos } = useContext(AppContext);
  return (
    <Container>
      <Status />
      <FilterButtons />
      {todos.filter((todo) => todo.checked).length > 0 && <ClearButton />}
    </Container>
  );
};

export default ActionBar;
