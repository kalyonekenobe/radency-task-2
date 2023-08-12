import {Meta, StoryObj} from "@storybook/react";
import ModalWrapper from "../layout/ModalWrapper";
import {InputWithLabel, TextareaWithLabel} from "../components/FormControls";
import Form from "../layout/Form";
import {CSSProperties} from "react";

const meta: Meta<typeof ModalWrapper> = {
  title: "App/ModalWrapper",
  component: ModalWrapper,
  tags: ["autodocs"],
};

export default meta;

function withWrapper(style: CSSProperties) {
  return (children: any) => <div style={style}>{children()}</div>;
}

export const DefaultModalWrapper: StoryObj<typeof ModalWrapper> = {
  decorators: [
    withWrapper({ height: 500 })
  ],
  args: {
    children: (

      <Form header={'Create note'} errors={[]} buttons={[
        { type: 'cancel', handleOnClick: () => {}, theme: 'white', value: 'Cancel' },
        { type: 'submit', handleOnClick: () => {}, theme: 'emerald', value: 'Create' },
      ]}>
        <div className="mb-2">
          <InputWithLabel defaultValue={''}
                          label={'Name: '}
                          onChange={() => {}}
          />
        </div>
        <div className="mb-2">
          <TextareaWithLabel defaultValue={''}
                             label={'Content: '}
                             onChange={() => {}}
          />
        </div>
      </Form>
    )
  },
};