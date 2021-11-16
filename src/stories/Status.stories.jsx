import AppContext from "../AppContext";

import React from "react";
import Status from "../Status";

/**
 As shown above, you can configure individual controls with the “control" annotation in the argTypes field of either a component or story. 
 */

// https://storybook.js.org/docs/react/essentials/controls

// https://storybook.js.org/docs/react/api/csf
// https://storybook.js.org/docs/react/writing-stories/decorators

// Problem auch mit controls? https://github.com/storybookjs/storybook/issues/8426#issuecomment-669021940

// TODO auch ein Thema? Jetzt? Später?
// https://storybook.js.org/docs/react/essentials/toolbars-and-globals
// const contextDecorator = (todos) => (Story) =>
//   (
//     <AppContext.Provider
//       value={{
//         todos,
//       }}
//     >
//       <Story />
//     </AppContext.Provider>
//   );

export default {
  component: Status,
  title: "Status",
  // decorators: [
  //   contextDecorator([
  //     { id: Date.now(), label: "a todo", checked: false },
  //     { id: Date.now(), label: "a todo", checked: false },
  //   ]),
  // ],
  args: {},
  argTypes: {
    // checked: {
    //   name: "name",
    //   description: "description",
    //   defaultValue: false,
    //   control: "boolean",
    // },
  },
};

const StatusComponent = ({ todosContextValue }) => {
  return (
    <AppContext.Provider
      value={{
        todos: todosContextValue,
      }}
    >
      <Status />
    </AppContext.Provider>
  );
};

const Template = (args) => <StatusComponent {...args} />;

export const StatusBasic = Template.bind({});
StatusBasic.argTypes = {
  todosContextValue: {
    name: "list of todos",
    description:
      "Variants of todo lists with different check states. Status component shows number of unchecked todos.",
    defaultValue: "openTodos",
    table: {
      // type: { summary: "list of todos" },
      // defaultValue: { summary: "blub" },
    },
    options: [
      "openTodos",
      "partlyCompletedTodos",
      "allCompletedTodos",
      "noTodos",
    ],
    mapping: {
      openTodos: [
        { id: Date.now(), label: "a todo", checked: false },
        { id: Date.now(), label: "a todo", checked: false },
      ],
      partlyCompletedTodos: [
        { id: Date.now(), label: "a todo", checked: false },
        { id: Date.now(), label: "a todo", checked: true },
      ],
      allCompletedTodos: [
        { id: Date.now(), label: "a todo", checked: true },
        { id: Date.now(), label: "a todo", checked: true },
      ],
      noTodos: [],
    },
    control: {
      type: "select", // Type 'select' is automatically inferred when 'options' is defined
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

export const StatusInteractive = Template.bind({});
// TODO wie Name definieren?
StatusInteractive.argTypes = {
  todosContextValue: {
    name: "list of todos",
    description: "Status component shows number of unchecked todos.",
    defaultValue: [{ id: Date.now(), label: "a todo", checked: false }],
    control: { type: "object" },
  },
};
