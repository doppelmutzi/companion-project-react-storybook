import { useContext } from "react";
import AppContext from "./AppContext";

const Status = () => {
  const { todos } = useContext(AppContext);
  const todosLeft = todos.reduce((count, todo) => {
    if (!todo.checked) return count + 1;
    return count;
  }, 0);
  return <div>{todosLeft} left</div>;
};

export default Status;
