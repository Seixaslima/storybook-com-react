import type { Meta, StoryObj } from '@storybook/react';

import Button from "./Button"

const meta: Meta<typeof Button> = {
  component: Button,
};


export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
  args: {
    children: "botão Inicial",
    disabled: false
  },
};

export const Disabled: Story = {
  args: {
    children: "botão Inicial",
    disabled: true
  },
};

