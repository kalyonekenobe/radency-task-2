import {Meta, StoryObj} from "@storybook/react";
import {Input, InputWithLabel} from "../components/FormControls";

const meta: Meta<typeof Input> = {
  title: "App/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

export const DefaultInput: StoryObj<typeof Input> = {
  args: {
    type: 'text',
    defaultValue: 'Some text',
    onChange: () => {}
  }
};

export const EmailInput: StoryObj<typeof Input> = {
  args: {
    ...DefaultInput.args,
    defaultValue: 'admin@gmail.com',
    type: 'email'
  }
};