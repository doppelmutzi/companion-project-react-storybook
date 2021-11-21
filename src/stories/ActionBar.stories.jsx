import ActionBar from "../ActionBar";
import theme from "../theme";

import {
  commonStoryContainerWidth,
  StorySpecificContainer,
  StyleAndContextProvider,
} from "./storyHelper";

export default {
  component: ActionBar,
  title: "Action bar",
};

const ActionBarWithProvider = (ctxvalues) => (
  <StyleAndContextProvider {...ctxvalues}>
    <StorySpecificContainer styles={{ width: commonStoryContainerWidth }}>
      <ActionBar />
    </StorySpecificContainer>
  </StyleAndContextProvider>
);

const ctxProps = {
  setTodos: () => {
    // mock impl
  },
  setFilterIndex: () => {
    // mock impl
  },
};

export const Standard = (args) => (
  <ActionBarWithProvider {...args} {...ctxProps} />
);

Standard.argTypes = {
  // names of control need to match names of context variables in this app
  todos: {
    name: "list of todos",
    description:
      "Variants of todo lists with different check states. Status component shows number of unchecked todos.",
    options: [
      "openTodos",
      "partlyCompletedTodos",
      "allCompletedTodos",
      "noTodos",
    ],
    mapping: {
      // provide relevant todo data for ActionBar component
      openTodos: [
        { id: 1, checked: false },
        { id: 2, checked: false },
      ],
      partlyCompletedTodos: [
        { id: 3, checked: false },
        { id: 4, checked: true },
      ],
      allCompletedTodos: [
        { id: 5, checked: true },
        { id: 6, checked: true },
      ],
      noTodos: [],
    },
    control: {
      // Type 'select' is automatically inferred when 'options' is defined
      type: "select",
      labels: {
        // 'labels' maps option values to string labels
        noTodos: "No todos in list",
        openTodos: "2 of 2 open todos",
        partlyCompletedTodos: "1 of 2 open todos",
        allCompletedTodos: "2 of 2 completed todos",
      },
    },
  },
};

Standard.args = {
  todos: "openTodos",
};

export const Interactive = (args) => (
  <ActionBarWithProvider {...args} {...ctxProps} />
);

Interactive.argTypes = {
  todos: {
    name: "list of todos",
    description: "Status component shows number of unchecked todos.",
    control: { type: "object" },
  },
  theme: {
    name: "theme variant",
    description:
      "There exists a dark and light theme with different background and foreground colors.",
    options: ["light", "dark"],
    mapping: {
      light: theme.LIGHT,
      dark: theme.DARK,
    },
    control: {
      type: "select",
      labels: {
        light: "light theme",
        dark: "dark theme",
      },
    },
  },
};

Interactive.args = {
  todos: [
    {
      id: Date.now(),
      date: new Date(Date.now()).toDateString(),
      label: "a todo",
      checked: false,
    },
  ],
  theme: "dark",
};
