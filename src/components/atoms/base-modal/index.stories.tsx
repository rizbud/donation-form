import { BaseModal } from ".";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Atoms/BaseModal",
  component: BaseModal,
} as ComponentMeta<typeof BaseModal>;

const Template: ComponentStory<typeof BaseModal> = (args) => (
  <BaseModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  children: <div>Modal Content</div>,
  onClose: () => null,
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  isOpen: true,
  children: <div>Modal Content</div>,
  onClose: undefined,
};
