import {Meta, StoryObj} from "@storybook/react";
import TableButton from "../components/TableButton";

const meta: Meta<typeof TableButton> = {
  title: "App/TableButton",
  component: TableButton,
  tags: ["autodocs"],
};

export default meta;

export const EditTableButton: StoryObj<typeof TableButton> = {
  args: {
    type: 'edit',
    handleOnClick: () => {},
  }
};

export const UnarchiveTableButton: StoryObj<typeof TableButton> = {
  args: {
    type: 'unarchive',
    handleOnClick: () => {},
  }
};

export const ArchiveTableButton: StoryObj<typeof TableButton> = {
  args: {
    type: 'archive',
    handleOnClick: () => {},
  }
};

export const RemoveTableButton: StoryObj<typeof TableButton> = {
  args: {
    type: 'remove',
    handleOnClick: () => {},
  }
};