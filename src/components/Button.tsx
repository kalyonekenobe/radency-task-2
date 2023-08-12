import React, {FC, memo, useCallback} from "react";

type ButtonProps = {
  theme: 'emerald' | 'indigo' | 'red' | 'yellow' | 'dark' | 'white',
  handleOnClick: () => any,
  value: string,
  type?: 'submit' | 'button',
  className?: string,
};

const Button: FC<ButtonProps> = memo(({ className = '', type = 'button', value, theme, handleOnClick }) => {

  const getClassNameByTheme = useCallback((theme: string) => {
    switch (theme) {
      case 'emerald':
        return 'bg-emerald-500 hover:bg-emerald-400 text-white border border-transparent';
      case 'indigo':
        return 'bg-indigo-500 hover:bg-indigo-400 text-white border border-transparent';
      case 'red':
        return 'bg-red-500 hover:bg-red-400 text-white border border-transparent';
      case 'yellow':
        return 'bg-yellow-500 hover:bg-yellow-400 text-white border border-transparent';
      case 'dark':
        return 'bg-slate-600 hover:bg-slate-700 text-white border border-transparent';
      case 'white':
        return 'bg-slate-50 hover:bg-slate-100 text-black border border-slate-200'
    }
  }, [theme]);

  return (
    <button type={type} className={`button ${getClassNameByTheme(theme)} ${className} rounded-md cursor-pointer px-10 py-1 flex font-semibold`}
          onClick={() => handleOnClick()}
    >
      {value}
    </button>
  );
});

export default Button;