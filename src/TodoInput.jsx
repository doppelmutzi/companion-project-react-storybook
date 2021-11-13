import { useContext, useRef } from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import AppContext from "./AppContext";

const Container = styled.div`
  display: flex;
`;

const Input = styled.input`
  border: 1px dashed gray;
`;

const TodoInput = () => {
  const { todos, setTodos } = useContext(AppContext);
  const inputRef = useRef("");
  return (
    <Container>
      <ToggleButton />
      <Input
        ref={inputRef}
        onKeyDown={(evt) => {
          const { value } = evt.target;
          if (evt.key === "Enter" && value.trim() !== "") {
            setTodos([
              ...todos,
              {
                id: Date.now(),
                label: value.trim(),
                checked: false,
              },
            ]);
            inputRef.current.value = "";
          }
        }}
      />
    </Container>
  );
};

export default TodoInput;
