import FilterButton from "../FilterButton";
import DeleteButton from "../DeleteButton";
import { StorySpecificContainer, StyleAndContextProvider } from "./storyHelper";
import theme from "../theme";

export default {
  title: "Buttons",
};

const containerStyles = {
  width: "50vw",
  padding: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ButtonWithContainer = ({ component: Component, theme, ...args }) => (
  <StyleAndContextProvider theme={theme}>
    <StorySpecificContainer
      styles={{
        ...containerStyles,
        backgroundColor: theme?.bgColor || "inherited",
      }}
    >
      <Component {...args} />
    </StorySpecificContainer>
  </StyleAndContextProvider>
);

const DeleteButtonTemplate = (args) => (
  <ButtonWithContainer component={DeleteButton} {...args} />
);

export const DeleteButtonDefault = DeleteButtonTemplate.bind({});

DeleteButtonDefault.args = {
  label: "❌",
};

export const DeleteButtonEmoji = DeleteButtonTemplate.bind({});

DeleteButtonEmoji.argTypes = {
  label: {
    options: ["emoji1", "emoji2", "emoji3", "emoji4"],
    mapping: {
      emoji1: "❌",
      emoji2: "❎",
      emoji3: "✖️",
      emoji4: "☢️",
    },
    control: {
      type: "inline-radio",
      labels: {
        emoji1: "❌",
        emoji2: "❎",
        emoji3: "✖️",
        emoji4: "☢️",
      },
    },
  },
};

DeleteButtonEmoji.args = {
  label: "emoji4",
};

export const FilterButtonDefault = (args) => (
  <ButtonWithContainer component={FilterButton} {...args} />
);

FilterButtonDefault.args = {
  label: "a label",
  active: false,
};

export const FilterButtonDarkMode = (args) => (
  <ButtonWithContainer component={FilterButton} {...args} />
);

FilterButtonDarkMode.argTypes = {
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
      type: "radio",
      labels: {
        light: "light theme",
        dark: "dark theme",
      },
    },
  },
};

FilterButtonDarkMode.args = {
  label: "a label",
  active: true,
  theme: "dark",
};

/*
Template.args = {
  contentText: ["content1", "content2"],
  size: "normal",
  label: "Button",
  transform: "none",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Template.args,
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Template.args,
};

export const Large = Template.bind({});
Large.args = {
  ...Template.args,
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  ...Template.args,
  size: "small",
};
*/
