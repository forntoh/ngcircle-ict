import React from "react";

import { Header } from "./header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Expanded = Template.bind({});

export const Collapsed = Template.bind({});
Collapsed.args = {
  isExpanded: false,
};
