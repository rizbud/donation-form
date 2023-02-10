import { BaseTextArea } from ".";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Atoms/BaseTextArea",
  component: BaseTextArea,
} as ComponentMeta<typeof BaseTextArea>;

const Template: ComponentStory<typeof BaseTextArea> = (args) => (
  <BaseTextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
};

export const Error = Template.bind({});
Error.args = {
  label: "Label",
  placeholder: "Placeholder",
  error: "At least 8 characters.",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  placeholder: "Placeholder",
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  label: "Label",
  placeholder: "Placeholder",
  required: true,
};
