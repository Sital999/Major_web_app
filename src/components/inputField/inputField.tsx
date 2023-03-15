import React from 'react';
import { ReactElement } from 'react';

interface IInputFieldProps {
  inputType: string;
  icon?: string;
  handleChange?: () => void;
}

export const InputField = (props: IInputFieldProps) => {
  const { inputType = 'input type', icon = '', handleChange = () => null } = props;
  // custom variable for attribute
  let type = '';
  let name = '';
  let placeholder = '';

  if (inputType == 'Email') {
    name = inputType;
    type = 'text';
    placeholder = 'example@gmail.com';
  } else if (inputType == 'Full Name') {
    name = inputType;
    type = 'text';
    placeholder = 'Full Name';
  } else if (inputType == 'Password') {
    name = inputType;
    type = 'password';
    placeholder = '*******';
  } else {
    name = inputType;
    type = 'text';
  }
  return (
    <>
      <div className="flex flex-col text-xl bg-black">
        {icon ? (
          <>
            <label htmlFor={name} className="self-start px-12">
              {inputType}
            </label>
            <img src={icon} alt={name} className="h-6 w-6" />
          </>
        ) : (
          <></>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className="self-start px-12 bg-black border-b-2 border-slate-400 w-96 outline-none"
          onChange={handleChange}
        />
      </div>
    </>
  );
};
