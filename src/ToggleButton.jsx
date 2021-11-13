import { useContext } from "react";
import AppContext from "./AppContext";

const ToggleButton = () => {
  const { todos, setTodos } = useContext(AppContext);
  const checkAll = todos.findIndex((todo) => todo.checked) == -1;
  return todos.length > 0 ? (
    <button
      onClick={() => {
        const updatedTodos = todos.map((todo) => ({
          ...todo,
          checked: checkAll,
        }));
        setTodos([...updatedTodos]);
      }}
    >
      {checkAll ? "check all" : "uncheck all"}
    </button>
  ) : null;
};

export default ToggleButton;
