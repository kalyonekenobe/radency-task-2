import {Meta, StoryObj} from "@storybook/react";
import NotesTable from "../components/NotesTable";
import {Provider} from "react-redux";
import {CSSProperties} from "react";
import {store} from "../redux/store";

const meta: Meta<typeof NotesTable> = {
  title: "App/NotesTable",
  component: NotesTable,
  tags: ["autodocs"],
};

export default meta;

function withWrapper(style: CSSProperties) {
  return (children: any) => <Provider store={store}>{children()}</Provider>;
}

const notes = store.getState().notes.notes;

export const DefaultNotesTable: StoryObj<typeof NotesTable> = {
  decorators: [
    withWrapper({})
  ],
  args: {
    notes: notes
  }
};