import {Meta, StoryObj} from "@storybook/react";
import {SelectWithLabel} from "../components/FormControls";

const meta: Meta<typeof SelectWithLabel> = {
  title: "App/SelectWithLabel",
  component: SelectWithLabel,
  tags: ["autodocs"],
};

export default meta;

export const DefaultSelectWithLabel: StoryObj<typeof SelectWithLabel> = {
  args: {
    options: [
      { text: 'First item', value: 1 },
      { text: 'Second item', value: 2 },
      { text: 'Third item', value: 3 },
      { text: 'Fourth item', value: 4 },
    ],
    value: 3,
    label: 'Values: ',
    onChange: () => {},
  }
};
