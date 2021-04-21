import React from "react";

import { Logo } from "./logo";

export default {
  title: "Example/Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Logo.args = {
  type: "primary",
  showBorder: false,
  onClick: undefined,
};

export const WithName = Template.bind({});
Logo.args = {
  type: "full",
  showBorder: false,
  onClick: undefined,
};

export const WithBorder = Template.bind({});
Logo.args = {
  type: "negative",
  showBorder: true,
  onClick: undefined,
};
