import React from "react";

const party = "🥳";
const nerd = "🥸";
const emojis = { party, nerd };

const Button = ({ width, variant, label, transform, emoji, ...restOfArgs }) => (
  <button
    style={{
      width: width || "auto",
      fontSize: variant === "primary" ? "24px" : "initial",
      ...restOfArgs,
    }}
  >
    {transform(label)} {emoji}
  </button>
);

export default {
  title: "Button",
  component: Button,
  args: {
    background: "green",
  },
  argTypes: {
    background: {
      control: "color",
    },
    variant: {
      options: ["primary", "secondary"],
      // control: { type: "radio" },
      control: "radio",
    },
    emoji: {
      options: Object.keys(emojis),
      mapping: emojis, // Maps serializable option values to complex arg values
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          party: "party hard",
          nerd: "nerd zone",
        },
      },
    },
    transform: {
      options: ["none", "upper_case", "lower_case"],
      mapping: {
        none: (value) => value,
        upper_case: (value) => value.toUpperCase(),
        lower_case: (value) => value.toLowerCase(),
      },
      control: {
        type: "radio",
        labels: {
          upper_case: "to upper case",
          lower_case: "to lower case",
        },
      },
    },
    width: {
      control: { type: "range", min: 400, max: 1200, step: 50 },
    },
  },
};

const Template = (args) => <Button {...args} />;

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
