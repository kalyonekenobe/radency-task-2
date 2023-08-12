import {Meta, StoryObj} from "@storybook/react";
import CreateNoteForm from "../components/CreateNoteForm";
import {CSSProperties} from "react";
import {Provider} from "react-redux";
import {store} from "../redux/store";

const meta: Meta<typeof CreateNoteForm> = {
  title: "App/CreateNoteForm",
  component: CreateNoteForm,
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

export const DefaultCreateNoteForm: StoryObj<typeof CreateNoteForm> = {
  decorators: [
    withWrapper({ height: 500 })
  ],
  args: {
    onClose: () => {},
  }
};
