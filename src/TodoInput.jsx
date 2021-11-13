import { useStage } from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";

const Container = styled.div`
  display: flex;
`;

const Input = styled.input`
  border: 1px dashed gray;
`;

const TodoInput = ({ toggleCheckTodos, addTodo }) => {
  return (
    <Container>
      <ToggleButton />
      <Input />
    </Container>
  );
};

export default TodoInput;
