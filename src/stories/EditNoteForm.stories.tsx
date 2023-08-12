import {Meta, StoryObj} from "@storybook/react";
import EditNoteForm from "../components/EditNoteForm";
import {CSSProperties} from "react";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {Category} from "../types/category.types";

const meta: Meta<typeof EditNoteForm> = {
  title: "App/EditNoteForm",
  component: EditNoteForm,
  tags: ["autodocs"],
};

export default meta;

function withWrapper(style: CSSProperties) {
  return (children: any) => <Provider store={store}>
    <div style={style}>
      {children()}
    </div>
  </Provider>;
}

export const DefaultEditNoteForm: StoryObj<typeof EditNoteForm> = {
  decorators: [
    withWrapper({ height: 500 })
  ],
  args: {
    note: {
      id: '1',
      name: 'Note',
      content: 'Content',
      category: { id: '1', name: 'Category' } as Category,
      dates: [],
      isArchived: false,
      createdAt: Date.now()
    },
    onClose: () => {},
  }
};
