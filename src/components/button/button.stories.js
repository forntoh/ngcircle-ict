import React from "react";

import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "LOREM IPSUM",
  backgroundColor: "#000",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "LOREM IPSUM",
};
