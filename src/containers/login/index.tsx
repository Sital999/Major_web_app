import React from 'react';
import ioe_portal_logo from '@assets/logo/ioe_logo_small.svg';
import email from '../../assets/logo/email.svg';
import password from '../../assets/logo/password.svg';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import { InputField } from '@components/inputField';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/cms');
  };
  return (
    <>
      <div className="bg-black min-h-screen grid grid-cols-12 grid-rows-1 text-4xl text-slate-50">
        <div className="col-start-5 col-span-4 space-y-8">
          <div className="flex flex-wrap mt-8 space-x-6 justify-center" id="Ed_Acadia_logo">
            <img className="h-20 w-20" src={ioe_portal_logo} alt="ed_acadia_logo"></img>
            <h3 className="self-center font-bold">IOE PORTAL</h3>
          </div>
          {/* <Logo logo={ed_acadia_logo} /> */}
          <div className="text-center text-2xl">
            <h3 className="font-bold">Login</h3>
          </div>
          <div className="InputField flex flex-col gap-8 items-center">
            <InputField inputType={'Email'} icon={email} />
            <InputField inputType={'Password'} icon={password} />
            <h1 className=" text-lg font-bold">Forgot Password?</h1>
          </div>
          <div>
            <Button
              text={'Sign In'}
              borderSize={'fit'}
              handleClick={handleClick}
              varient="primary"
            />
          </div>
          <div className="ml-10 flex justify-center space-x-2 text-sm text-center">
            <h1 className="text-gray-500">DONT HAVE AN ACCOUNT?</h1>
            <Link to={'/signup'}>
              <h3>SIGN UP</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
