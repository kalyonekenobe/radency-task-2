import {Meta, StoryObj} from "@storybook/react";
import Form from "../layout/Form";
import {InputWithLabel} from "../components/FormControls";

const meta: Meta<typeof Form> = {
  title: "App/Form",
  component: Form,
  tags: ["autodocs"],
};

export default meta;

export const FormWithOkAndCancelButtons: StoryObj<typeof Form> = {
  args: {
    header: 'Ok and cancel',
    errors: [],
    buttons: [
      { type: 'cancel', handleOnClick: () => {}, theme: 'white', value: 'Cancel' },
      { type: 'submit', handleOnClick: () => {}, theme: 'emerald', value: 'Ok' },
    ],
    children: (
      <>
        <div className="mb-2">
          <InputWithLabel defaultValue={'Alex'}
                          label={'First name: '}
                          onChange={() => {}}
          />
        </div>
        <div className="mb-2">
          <InputWithLabel defaultValue={'Smith'}
                          label={'Last name: '}
                          onChange={() => {}}
          />
        </div>
      </>
    )
  }
};

export const FormWithOkButton: StoryObj<typeof Form> = {
  args: {
    header: 'Only ok',
    errors: [],
    buttons: [
      { type: 'submit', handleOnClick: () => {}, theme: 'emerald', value: 'Ok' },
    ],
    children: (
      <>
        <div className="mb-2">
          <InputWithLabel defaultValue={'Alex'}
                          label={'First name: '}
                          onChange={() => {}}
          />
        </div>
        <div className="mb-2">
          <InputWithLabel defaultValue={'Smith'}
                          label={'Last name: '}
                          onChange={() => {}}
          />
        </div>
      </>
    )
  }
};

export const FormWithCancelButton: StoryObj<typeof Form> = {
  args: {
    header: 'Only cancel',
    errors: [],
    buttons: [
      { type: 'submit', handleOnClick: () => {}, theme: 'white', value: 'Cancel' },
    ],
    children: (
      <>
        <div className="mb-2">
          <InputWithLabel defaultValue={'Alex'}
                          label={'First name: '}
                          onChange={() => {}}
          />
        </div>
        <div className="mb-2">
          <InputWithLabel defaultValue={'Smith'}
                          label={'Last name: '}
                          onChange={() => {}}
          />
        </div>
      </>
    )
  }
};

export const FormWithErrors: StoryObj<typeof Form> = {
  args: {
    header: 'Form header',
    errors: [
      'Wrong first name',
      'Wrong last name'
    ],
    buttons: [
      { type: 'submit', handleOnClick: () => {}, theme: 'emerald', value: 'Ok' },
    ],
    children: (
      <>
        <div className="mb-2">
          <InputWithLabel defaultValue={'Alex'}
                          label={'First name: '}
                          onChange={() => {}}
          />
        </div>
        <div className="mb-2">
          <InputWithLabel defaultValue={'Smith'}
                          label={'Last name: '}
                          onChange={() => {}}
          />
        </div>
      </>
    )
  }
};