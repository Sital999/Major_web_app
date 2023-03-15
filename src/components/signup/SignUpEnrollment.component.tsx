import React from 'react';
import { Button } from '@components/button';

interface ISignUpEnrollmentProps {
  text?: string;
  datas: Array<string>;
  // setClick?: React.Dispatch<React.SetStateAction<boolean>>;
  // click?: boolean;
}

export const SignUpEnrollment = (props: ISignUpEnrollmentProps) => {
  const {
    text = '',
    datas = [],
    // click = false, setClick = null
  } = props;

  const handleClick = () => {
    // setClick(!click);
    // console.log(e.target.value)
  };

  return (
    <>
      <div className="flex flex-col wrap text-2xl gap-6">
        <div className="flex flex-row gap-4">
          <h2>{text}</h2>
          <input className="mt-3 border-t-4 border-gray-200 bg-black outline-none" readOnly />
        </div>
        <div className="flex flex-row flex-wrap justify-around gap-8 mb-4">
          {datas.map((data) => {
            return (
              <>
                <Button text={data} varient={'secondary'} handleClick={handleClick} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
