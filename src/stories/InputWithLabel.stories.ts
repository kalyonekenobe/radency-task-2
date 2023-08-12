import {Meta, StoryObj} from "@storybook/react";
import {InputWithLabel} from "../components/FormControls";

const meta: Meta<typeof InputWithLabel> = {
  title: "App/InputWithLabel",
  component: InputWithLabel,
  tags: ["autodocs"],
};

export default meta;

export const DefaultInputWithLabel: StoryObj<typeof InputWithLabel> = {
  args: {
    type: 'text',
    defaultValue: 'Some text',
    label: 'Some label: ',
    onChange: () => {},
  }
};

export const EmailInputWithLabel: StoryObj<typeof InputWithLabel> = {
  args: {
    type: 'email',
    defaultValue: 'email@gmail.com',
    label: 'Email: ',
    onChange: () => {},
  }
};

export const PasswordInputWithLabel: StoryObj<typeof InputWithLabel> = {
  args: {
    type: 'password',
    defaultValue: 'password',
    label: 'Password: ',
    onChange: () => {},
  }
};
