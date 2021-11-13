import { useContext } from "react";
import styled from "styled-components";
import AppContext from "./AppContext";

const Container = styled.div`
  display: flex;
`;

const Item = styled.div`
  margin-left: 10px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "normal")};
`;

const TodoItem = ({ todo }) => {
  const { todos, setTodos } = useContext(AppContext);
  return (
    <Container>
      <button
        onClick={() => {
          const index = todos.findIndex((item) => item.id === todo.id);
          const updatedTodos = [...todos];
          updatedTodos[index] = {
            ...todo,
            checked: !todo.checked,
          };
          setTodos(updatedTodos);
        }}
      >
        check
      </button>
      <Item checked={todo.checked || false}>{todo.label}</Item>
      <button
        onClick={() => {
          setTodos([...todos.filter((item) => item.id != todo.id)]);
        }}
      >
        delete
      </button>
    </Container>
  );
};

export default TodoItem;
