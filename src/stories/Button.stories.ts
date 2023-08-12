import {Meta, StoryObj} from "@storybook/react";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "App/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

export const EmeraldButton: StoryObj<typeof Button> = {
  args: {
    theme: 'emerald',
    value: 'Emerald',
    handleOnClick: () => {},
  }
};

export const DarkButton: StoryObj<typeof Button> = {
  args: {
    theme: 'dark',
    value: 'Dark',
    handleOnClick: () => {},
  }
};

export const IndigoButton: StoryObj<typeof Button> = {
  args: {
    theme: 'indigo',
    value: 'Indigo',
    handleOnClick: () => {},
  }
};


export const WhiteButton: StoryObj<typeof Button> = {
  args: {
    theme: 'white',
    value: 'White',
    handleOnClick: () => {},
  }
};

export const RedButton: StoryObj<typeof Button> = {
  args: {
    theme: 'red',
    value: 'Red',
    handleOnClick: () => {},
  }
};

export const YellowButton: StoryObj<typeof Button> = {
  args: {
    theme: 'yellow',
    value: 'Yellow',
    handleOnClick: () => {},
  }
};


