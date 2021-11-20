import TodoInput from "../TodoInput";

import {
  StorySpecificContainer,
  StyleAndContextProvider,
  commonStoryContainerWidth,
} from "./storyHelper";

// meta data https://storybook.js.org/docs/react/api/csf#default-export
export default {
  component: TodoInput,
  title: "Todo input field",
};

const TodoInputWithProvider = (args) => (
  <StyleAndContextProvider {...args}>
    <StorySpecificContainer styles={{ width: commonStoryContainerWidth }}>
      <TodoInput />
    </StorySpecificContainer>
  </StyleAndContextProvider>
);

const translationControl = {
  name: "app language",
  description: "Labels are displayed in English or German.",
  table: {
    type: { summary: "language code" },
    defaultValue: { summary: "English" },
  },
  options: ["en", "de"],
  mapping: {
    en: {
      getPreferedLang: () => "en",
      todoInput: {
        placeholder: {
          en: "What needs to be done?",
        },
      },
    },
    de: {
      getPreferedLang: () => "de",
      todoInput: {
        placeholder: {
          de: "Was muss getan werden?",
        },
      },
    },
  },
  control: {
    type: "inline-radio",
    labels: {
      // 'labels' maps option values to string labels
      en: "🇺🇸",
      de: "🇩🇪",
    },
  },
};

const additionalCtxValues = {
  setTodos: () => {
    // mock impl
  },
};

export const NoTodoInList = (args) => (
  <TodoInputWithProvider {...args} todos={[]} {...additionalCtxValues} />
);

NoTodoInList.argTypes = {
  translation: translationControl,
};

NoTodoInList.args = {
  translation: "en", // initial value / argTypes.defaultValue deprecated
};

export const SingleUncheckedTodoInList = (args) => (
  <TodoInputWithProvider
    {...args}
    todos={[
      {
        checked: false,
      },
    ]}
    {...additionalCtxValues}
  />
);

SingleUncheckedTodoInList.argTypes = {
  translation: translationControl,
};

SingleUncheckedTodoInList.args = {
  translation: "de",
};

export const SingleCheckedTodoInList = (args) => (
  <TodoInputWithProvider
    {...args}
    todos={[
      {
        checked: true,
      },
    ]}
    {...additionalCtxValues}
  />
);

SingleCheckedTodoInList.argTypes = {
  translation: translationControl,
};

SingleCheckedTodoInList.args = {
  translation: "en",
};
