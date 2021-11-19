import TodoItem from "../TodoItem";

import { StorySpecificContainer, StyleAndContextProvider } from "./storyHelper";

export default {
  component: TodoItem,
  title: "Todo item",
};

const exampleTodo = {
  id: 1,
  date: new Date(Date.now()).toDateString(),
  label: "hello",
  checked: false,
};

const TodoItemWithProvider = ({ label, checked, date, ...ctxValues }) => (
  <StyleAndContextProvider {...ctxValues}>
    <StorySpecificContainer styles={{ width: 750 }}>
      <TodoItem
        todo={{
          ...exampleTodo,
          date: new Date(date).toDateString(),
          label,
          checked,
        }}
      />
    </StorySpecificContainer>
  </StyleAndContextProvider>
);

// provide context to prevent crashes in event handlers
const ctxProps = {
  todos: [{ ...exampleTodo }],
  setTodos: () => {
    //mock impl
  },
};

export const InitiallyUnchecked = (args) => (
  <TodoItemWithProvider {...args} {...ctxProps} />
);

InitiallyUnchecked.argTypes = {
  date: { control: "date" },
};

InitiallyUnchecked.args = {
  label: "read a LogRocket article",
  date: new Date(),
  checked: false,
};

const checkedCtxProps = {
  ...ctxProps,
  todos: [{ ...exampleTodo, checked: true }],
};

export const InitiallyChecked = (args) => (
  <TodoItemWithProvider {...args} {...ctxProps} />
);

InitiallyChecked.argTypes = {
  ...InitiallyUnchecked.argTypes,
};

InitiallyChecked.args = {
  ...InitiallyUnchecked.args,
  checked: true,
};
