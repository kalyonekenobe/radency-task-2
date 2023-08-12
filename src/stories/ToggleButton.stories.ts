import {Meta, StoryObj} from "@storybook/react";
import ToggleButton from "../components/ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "App/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
};

export default meta;

export const ActiveToggleButton: StoryObj<typeof ToggleButton> = {
  args: {
    activeValue: 'Active',
    disabledValue: 'Disabled',
    isActive: true,
    callback: () => {},
  }
};

export const DisabledToggleButton: StoryObj<typeof ToggleButton> = {
  args: {
    activeValue: 'Active',
    disabledValue: 'Disabled',
    isActive: false,
    callback: () => {},
  }
};

