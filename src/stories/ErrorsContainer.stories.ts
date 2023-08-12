import {Meta, StoryObj} from "@storybook/react";
import ErrorsContainer from "../components/ErrorsContainer";

const meta: Meta<typeof ErrorsContainer> = {
  title: "App/ErrorsContainer",
  component: ErrorsContainer,
  tags: ["autodocs"],
};

export default meta;

export const DefaultErrorsContainer: StoryObj<typeof ErrorsContainer> = {
  args: {
    errors: [
      'Wrong email!',
      'Wrong password!'
    ],
  }
};
