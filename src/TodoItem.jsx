import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Item = styled.div`
  margin-left: 10px;
`;

const TodoItem = ({ todo }) => {
  return (
    <Container>
      <button>check</button>
      <Item>{todo.label}</Item>
    </Container>
  );
};

export default TodoItem;
