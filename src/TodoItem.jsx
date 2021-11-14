import { useContext, useState } from "react";
import styled from "styled-components";
import AppContext from "./AppContext";

const Container = styled.div`
  height: 30px;
  background: white;
  padding: 16px;
  display: flex;
  align-items: center;
  border: 0 solid #e6e6e6;
  border-bottom-width: 1px;
  > button {
    background: none;
  }
`;

const Item = styled.div`
  flex: 1;
  font-size: 24px;
  margin: 0 24px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "normal")};
`;

const CheckButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #a0a0a0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Check = styled.span`
  font-size: 20px;
  color: #9bd9cd;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const DeleteButton = styled.button`
  border: none;
  font-size: 30px;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const TodoItem = ({ todo }) => {
  const { todos, setTodos } = useContext(AppContext);
  const [hover, setHover] = useState(false);
  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CheckButton
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
        <Check visible={todo.checked}>&#x02713;</Check>
      </CheckButton>
      <Item checked={todo.checked || false}>{todo.label}</Item>
      <DeleteButton
        visible={hover}
        onClick={() => {
          setTodos([...todos.filter((item) => item.id != todo.id)]);
        }}
      >
        &#x02717;
      </DeleteButton>
    </Container>
  );
};

export default TodoItem;
