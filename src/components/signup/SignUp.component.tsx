import email from '@assets/logo/email.svg';
import full_name from '@assets/logo/full_name.svg';
import password from '@assets/logo/password.svg';
import { Button } from '../../components/button';
import { InputField } from '@components/inputField';

interface ISignUpComponentProps {
  setClickNext?: any;
  clickNext?: boolean;
}

export const SignUpComponent = ({ setClickNext, clickNext }: ISignUpComponentProps) => {
  const handleClick = () => {
    setClickNext(!clickNext);
  };
  return (
    <>
      <div className=" text-2xl font-bold text-primary text-center">
        <h3 className="font-bold">Hustle Free University , Join us now FREE</h3>
      </div>
      <div className="InputField flex flex-col gap-5 items-center">
        <InputField inputType={'Email'} icon={email} />
        <InputField inputType={'Full Name'} icon={full_name} />
        <InputField inputType={'Password'} icon={password} />
      </div>
      <div className="flex flex-row justify-left ml-14 gap-4">
        <input type="checkbox" className="h-4 w-4 ring-2 mt-1 ring-slate-400 accent-slate-900" />
        <h1 className=" text-lg font-semibold text-slate-300">
          I agree to these Terms and Conditions
        </h1>
      </div>
      <div className="flex justify-end">
        <Button text={' Next '} borderSize={'base'} size={'lg'} handleClick={handleClick} />
      </div>
      <div className="ml-10 flex justify-center space-x-2 text-sm text-center">
        <h1 className="text-gray-500">ALREADY HAVE AN ACCOUNT?</h1>
        <h3>SIGN IN</h3>
      </div>
    </>
  );
};
