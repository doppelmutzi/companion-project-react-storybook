import styled from "styled-components";
import { useContext } from "react";
import AppContext from "./AppContext";

const Button = styled.a`
  padding: 4px 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ClearButton = () => {
  const { todos, setTodos } = useContext(AppContext);
  return (
    <Button
      onClick={() => {
        const uncheckedTodos = todos.filter((todo) => !todo.checked);
        setTodos([...uncheckedTodos]);
      }}
    >
      Clear completed
    </Button>
  );
};

export default ClearButton;
