import { useContext } from "react";
import AppContext from "./AppContext";

const ClearButton = () => {
  const { todos, setTodos } = useContext(AppContext);
  return (
    <button
      onClick={() => {
        const uncheckedTodos = todos.filter((todo) => !todo.checked);
        setTodos([...uncheckedTodos]);
      }}
    >
      clear completed
    </button>
  );
};

export default ClearButton;
