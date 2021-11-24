import TodoItem from "../TodoItem";
import { withKnobs, text, boolean, date } from "@storybook/addon-knobs";

import {
  StorySpecificContainer,
  StyleAndContextProvider,
  commonStoryContainerWidth,
} from "./storyHelper";

export default {
  component: TodoItem,
  title: "Todo item (Knobs)",
  decorators: [withKnobs],
};

const exampleTodo = {
  id: 1,
  date: new Date(Date.now()).toDateString(),
  label: "hello",
  checked: false,
};

const TodoItemWithProvider = (ctxValues) => (
  <StyleAndContextProvider {...ctxValues}>
    <StorySpecificContainer styles={{ width: commonStoryContainerWidth }}>
      <TodoItem
        todo={{
          ...exampleTodo,
          date: new Date(date("creation date", new Date())).toDateString(),
          label: text("label", "a todo"),
          checked: boolean("checked", false),
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

export const InitiallyUncheckedKnobs = () => (
  <TodoItemWithProvider {...ctxProps} />
);
