import React from "react";

import { Logo } from "./logo";

export default {
  title: "Components/Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  showBorder: false,
  onClick: undefined,
};

export const WithName = Template.bind({});
WithName.args = {
  type: "full",
  showBorder: false,
  onClick: undefined,
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  type: "negative",
  showBorder: true,
  onClick: undefined,
};
