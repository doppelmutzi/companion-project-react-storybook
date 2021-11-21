import TodoItem from "../TodoItem";

import {
  StorySpecificContainer,
  StyleAndContextProvider,
  commonStoryContainerWidth,
} from "./storyHelper";

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
    <StorySpecificContainer styles={{ width: commonStoryContainerWidth }}>
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
  date: {
    name: "creation date",
    description: "Creation date of an todo entry.",
    table: {
      type: { summary: "Date.toDateString() result" },
      defaultValue: { summary: "Date.now()" },
    },
    control: "date",
  },
};

InitiallyUnchecked.args = {
  label: "read a LogRocket article",
  date: new Date(),
  checked: false,
};

export const InitiallyChecked = InitiallyUnchecked.bind({});

InitiallyChecked.argTypes = {
  ...InitiallyUnchecked.argTypes,
  checked: {
    options: ["openTodo", "completedTodo"],
    mapping: {
      openTodo: false,
      completedTodo: true,
    },
    control: {
      type: "inline-radio", // Type 'select' is automatically inferred when 'options' is defined
      labels: {
        openTodo: "todo is open",
        completedTodo: "todo is completed",
      },
    },
  },
};

InitiallyChecked.args = {
  ...InitiallyUnchecked.args,
  checked: "completedTodo",
};
