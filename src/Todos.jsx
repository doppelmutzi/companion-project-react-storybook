import { useState } from "react";
import styled from "styled-components";
import ActionBar from "./ActionBar";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import AppContext from "./AppContext";
import theme from "./theme";
import translation from "./translation";

const Container = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filterIndex, setFilterIndex] = useState(0);
  return (
    <AppContext.Provider
      value={{
        todos,
        setTodos,
        filterIndex,
        setFilterIndex,
        theme: theme.LIGHT,
        translation,
      }}
    >
      <Container>
        <TodoInput />
        <TodoList />
        {todos.length > 0 && <ActionBar />}
      </Container>
    </AppContext.Provider>
  );
};

export default Todos;
