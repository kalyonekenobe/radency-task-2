import {FC, memo, ReactNode} from "react";
import ErrorsContainer from "../components/ErrorsContainer";
import Button from "../components/Button";

type FormButtonProps = {
  theme: 'emerald' | 'indigo' | 'red' | 'yellow' | 'dark' | 'white',
  handleOnClick: (...args: any[]) => any,
  value: string,
  type: 'submit' | 'cancel',
};

type FormProps = {
  header: string,
  errors: string[],
  children: ReactNode | ReactNode[],
  buttons: FormButtonProps[]
};

const Form: FC<FormProps> = memo(({ children, errors, buttons, header }) => {

  const submitButton = buttons.find(button => button.type === 'submit');
  const cancelButton = buttons.find(button => button.type === 'cancel');

  return (
    <form onSubmit={event => submitButton?.handleOnClick(event)}>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
          <ErrorsContainer errors={errors} />
          <h3 className="text-base font-semibold leading-6 text-gray-900 text-xl mb-5" id="modal-title">{header}</h3>
          {children}
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        {
          submitButton &&
          <Button type={'submit'} theme={submitButton.theme} handleOnClick={() => {}} value={submitButton.value} className={'ms-2 !px-5 py-1'} />
        }
        {
          cancelButton &&
          <Button theme={cancelButton.theme} handleOnClick={() => cancelButton?.handleOnClick()} value={cancelButton.value} className={'ms-2 !px-5 py-1'} />
        }
      </div>
    </form>
  );
});

export default Form;