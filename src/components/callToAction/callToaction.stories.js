import React from "react";

import { CallToAction } from "./callToaction";

export default {
  title: "Sections/CallToAction",
  component: CallToAction,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CallToAction {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "LOREM IPSUM",
  description: "LOREM IPSUM",
  backgroundColor: "#000",
  onClick: undefined,
};
