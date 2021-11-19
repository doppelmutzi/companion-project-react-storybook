import TodoInput from "../TodoInput";

import { StorySpecificContainer, StyleAndContextProvider } from "./storyHelper";

// meta data https://storybook.js.org/docs/react/api/csf#default-export
export default {
  component: TodoInput,
  title: "Todo input field",
};

const TodoInputWithProvider = (args) => (
  <StyleAndContextProvider {...args}>
    <StorySpecificContainer styles={{ width: 750 }}>
      <TodoInput />
    </StorySpecificContainer>
  </StyleAndContextProvider>
);

const translationControl = {
  name: "app language",
  description: "TODO",
  defaultValue: "en",
  table: {
    type: { summary: "TODO" },
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
    type: "select", // Type 'select' is automatically inferred when 'options' is defined
    labels: {
      // 'labels' maps option values to string labels
      en: "🇺🇸",
      de: "🇩🇪",
    },
  },
};

export const NoTodoInList = (args) => (
  <TodoInputWithProvider {...args} todos={[]} />
);

NoTodoInList.argTypes = {
  translation: translationControl,
};

export const SingleUncheckedTodoInList = (args) => (
  <TodoInputWithProvider
    {...args}
    todos={[
      {
        checked: false,
      },
    ]}
    setTodos={() => {
      // mock
    }}
  />
);

SingleUncheckedTodoInList.argTypes = {
  translation: translationControl,
};

export const SingleCheckedTodoInList = (args) => (
  <TodoInputWithProvider
    {...args}
    todos={[
      {
        checked: true,
      },
    ]}
    setTodos={() => {
      // mock
    }}
  />
);

SingleCheckedTodoInList.argTypes = {
  translation: translationControl,
};
