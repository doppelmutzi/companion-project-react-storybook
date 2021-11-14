import { useContext, useRef } from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import AppContext from "./AppContext";

const Container = styled.div`
  display: flex;
  > * {
    height: 50px;
  }
`;

const Input = styled.input`
  flex: 1;
  background: white;
  border: 0;
  font-size: 24px;
  &::placeholder {
    color: #d9d9d9;
    font-style: italic;
  }
`;

const TodoInput = () => {
  const { todos, setTodos } = useContext(AppContext);
  const inputRef = useRef("");
  return (
    <Container>
      <ToggleButton />
      <Input
        placeholder="What needs to be done?"
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
