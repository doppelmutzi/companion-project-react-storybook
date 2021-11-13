import { useState } from "react";
import ActionBar from "./ActionBar";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      label: "todo1",
    },
    { label: "todo2" },
  ]);
  return (
    <div>
      <TodoInput />
      <TodoList todos={todos} />
      <ActionBar />
    </div>
  );
};

export default Todos;
