import { useState } from "react";
import ActionBar from "./ActionBar";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import AppContext from "./AppContext";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filterIndex, setFilterIndex] = useState(0);
  return (
    <AppContext.Provider
      value={{ todos, setTodos, filterIndex, setFilterIndex }}
    >
      <div>
        <TodoInput />
        <TodoList />
        <ActionBar />
      </div>
    </AppContext.Provider>
  );
};

export default Todos;
