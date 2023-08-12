import React, {FC, memo, useState} from "react";
import Button from "./Button";

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
      <Button theme={'dark'} handleOnClick={() => handleOnClick()} value={activeValue} className={'me-2'} />
      :
      <Button theme={'white'} handleOnClick={() => handleOnClick()} value={disabledValue} className={'me-2'} />
  );
});

export default ToggleButton;