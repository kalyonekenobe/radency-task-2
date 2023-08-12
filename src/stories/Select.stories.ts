import {Meta, StoryObj} from "@storybook/react";
import {Select} from "../components/FormControls";

const meta: Meta<typeof Select> = {
  title: "App/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;

export const DefaultSelect: StoryObj<typeof Select> = {
  args: {
    options: [
      { text: 'First item', value: 1 },
      { text: 'Second item', value: 2 },
      { text: 'Third item', value: 3 },
      { text: 'Fourth item', value: 4 },
    ],
    value: 2,
    onChange: () => {},
  }
};
