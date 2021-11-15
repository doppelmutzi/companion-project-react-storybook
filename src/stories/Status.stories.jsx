import AppContext from "../AppContext";

import React from "react";
import Status from "../Status";

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

  // Todo wie bei emoji

  // argTypes: {
  //   todos: {
  //     options: [
  //       [
  //         { id: Date.now(), label: "a todo", checked: false },
  //         { id: Date.now(), label: "a todo", checked: false },
  //       ],
  //       [
  //         { id: Date.now(), label: "a todo", checked: false },
  //         { id: Date.now(), label: "a todo", checked: true },
  //       ],
  //     ],
  //     control: "radio",
  //   },
  // },
  args: {
    checked: false,
  },
};

const StatusComponent = ({ checked }) => (
  <AppContext.Provider
    value={{
      todos: [
        { id: Date.now(), label: "a todo", checked },
        { id: Date.now(), label: "a todo", checked },
      ],
    }}
  >
    <Status />
  </AppContext.Provider>
);

export const Basic = (args) => <StatusComponent {...args} />;
