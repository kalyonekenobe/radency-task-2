import React, {FC, memo, useState} from "react";

type ToggleButtonProps = {
  activeValue: string,
  disabledValue: string,
  isActive: boolean,
  callback?: (isActive: boolean) => any,
};

type ToggleButtonState = {
  isActive: boolean,
}

const ToggleButton: FC<ToggleButtonProps> = memo(({ activeValue, disabledValue, isActive, callback }) => {

  const [state, setState] = useState<ToggleButtonState>({ isActive });

  const handleOnClick = () => {
    setState({ ...state, isActive: !state.isActive });
    callback?.(!state.isActive);
  };

  return (
    state.isActive ?
      <span className="button me-2 bg-white outline outline-[1px] outline-slate-300 hover:bg-slate-100 rounded-md cursor-pointer px-10 py-1 text-slate-500 flex font-semibold"
         onClick={() => handleOnClick()}
      >
        {activeValue}
      </span>
      :
      <span className="button me-2 bg-slate-600 hover:bg-slate-500 rounded-md cursor-pointer px-10 py-1 flex text-white font-semibold"
         onClick={() => handleOnClick()}
      >
        {disabledValue}
      </span>
  );
});

export default ToggleButton;