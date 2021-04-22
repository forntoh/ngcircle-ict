import React from "react";

import { HomePage } from "./home";

export default {
  title: "Pages/Home",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
