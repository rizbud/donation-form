import { useState } from "react";

import { BaseInput } from ".";

import { Eye, EyeOff } from "~/assets/svg";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Atoms/BaseInput",
  component: BaseInput,
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (args) => (
  <BaseInput {...args} />
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

export const Prefix = Template.bind({});
Prefix.args = {
  label: "Label",
  placeholder: "Placeholder",
  hasPrefix: true,
};

const PasswordTemplate: ComponentStory<typeof BaseInput> = (args) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <BaseInput
      {...args}
      action={{
        icon: isVisible ? EyeOff : Eye,
        onClick: () => setIsVisible((prev) => !prev),
      }}
      type={isVisible ? "text" : "password"}
    />
  );
};

export const Password = PasswordTemplate.bind({});
Password.args = {
  label: "Password",
  placeholder: "Password",
};
