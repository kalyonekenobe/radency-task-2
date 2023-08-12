import {Meta, StoryObj} from "@storybook/react";
import NotesTableWithUserControls from "../components/NotesTableWithUserControls";
import {Provider} from "react-redux";
import {CSSProperties} from "react";
import {store} from "../redux/store";

const meta: Meta<typeof NotesTableWithUserControls> = {
  title: "App/NotesTableWithUserControls",
  component: NotesTableWithUserControls,
  tags: ["autodocs"],
};

export default meta;

function withWrapper(style: CSSProperties) {
  return (children: any) => <Provider store={store}>{children()}</Provider>;
}

const notes = store.getState().notes.notes;

export const DefaultNotesTableWithUserControls: StoryObj<typeof NotesTableWithUserControls> = {
  decorators: [
    withWrapper({})
  ],
  args: {
    notes: notes
  }
};