import {FC, memo} from "react";

type ControlWithLabelProps = {
  label: string
};

type InputProps = {
  type?: 'text' | 'email' | 'checkbox' | 'radio' | 'password' | 'hidden' | 'file' | 'time' | 'date' | 'datetime-local',
  defaultValue: string,
  onChange: (...args: any[]) => any,
};

export const Input: FC<InputProps> = memo(({ type = 'text', defaultValue, onChange }) => {

  return (
    <input type={type} className="w-full border rounded-md mt-1 px-2 py-1 outline-none"
           defaultValue={defaultValue}
           onChange={event => onChange(event)}
    />
  );
});

type TextareaProps = {
  defaultValue: string,
  onChange: (...args: any[]) => any,
};

export const Textarea: FC<TextareaProps> = memo(({ defaultValue, onChange }) => {

  return (
    <textarea className="w-full border rounded-md mt-1 px-2 py-1 outline-none min-h-[100px]"
              defaultValue={defaultValue}
              onChange={event => onChange(event)}
    />
  );
});

type SelectOption = {
  text: string,
  value: number | string,
};

type SelectProps = {
  value: number | string,
  onChange: (...args: any[]) => any,
  options: SelectOption[]
};

export const Select: FC<SelectProps> = memo(({ options, value, onChange }) => {

  return (
    <select className="w-full border rounded-md mt-1 px-2 py-1 outline-none"
            value={value}
            onChange={event => onChange(event)}
    >
      {
        options.map(option => (
          <option value={option.value} key={crypto.randomUUID()}>
            {option.text}
          </option>
        ))
      }
    </select>
  );
});

export const InputWithLabel: FC<ControlWithLabelProps & InputProps> = memo(({ type = 'text', label, defaultValue, onChange }) => {

  return (
    <>
      <label className="text-slate-500 text-sm">{label}</label>
      <Input type={type}
             defaultValue={defaultValue}
             onChange={event => onChange(event)}
      />
    </>
  );
});

export const TextareaWithLabel: FC<ControlWithLabelProps & TextareaProps> = memo(({ label, defaultValue, onChange }) => {

  return (
    <>
      <label className="text-slate-500 text-sm">{label}</label>
      <Textarea defaultValue={defaultValue}
                onChange={event => onChange(event)}
      />
    </>
  );
});

export const SelectWithLabel: FC<ControlWithLabelProps & SelectProps> = memo(({ label, value, options, onChange }) => {

  return (
    <>
      <label className="text-slate-500 text-sm">{label}</label>
      <Select
              value={value}
              onChange={event => onChange(event)}
              options={options}
      />
    </>
  );
});