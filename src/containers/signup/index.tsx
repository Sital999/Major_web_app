import ioe_portal_logo from '@assets/logo/ioe_logo_small.svg';
import { SignUpComponent, SignUpEnrollment } from '@components/signup';
import { useState } from 'react';
import { Button } from '@components/button';
import { useNavigate } from 'react-router-dom';

const campuses = [
  'IOE, Pulchwok',
  'IOE, Thapathali',
  'IOE Purwanchal',
  'IOE Paschimanchal',
  'Kathmandu Engineerin College',
  'Advanced College of Engineering',
  'Sagarmatha Engineering College',
];

const courses = [
  'Computer',
  'Electronics',
  'Electrical',
  'Mechanical',
  'Architecture',
  'Industrial',
];

const semester = [
  '1st Semester',
  '2nd Semester',
  '3rd Semester',
  '4th Semester',
  '5th Semester',
  '6th Semester',
  '7th Semester',
  '8th Semester',
];

const SignUp = () => {
  const [clickNext, setClickNext] = useState(false);
  const [clickCampus, setClickCampus] = useState(false);
  const [clickSemester, setClickSemester] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  let buttonText = '';
  let handleClick;

  const handleSignUp = () => {
    navigate('/login');
  };

  const handleClickCampus = () => {
    setClickCampus(!clickCampus);
  };

  const handleClickSemester = () => {
    setClickSemester(!clickSemester);
  };

  if (isSignUp) {
    buttonText = 'Sign Up';
    handleClick = handleSignUp;
  } else if (!clickCampus) {
    buttonText = 'Next';
    handleClick = handleClickCampus;
  } else if (clickCampus && !clickSemester) {
    buttonText = 'Next';
    handleClick = handleClickSemester;
  } else {
    setIsSignUp(!isSignUp);
  }

  return (
    <>
      <div className="bg-black min-h-screen grid grid-cols-12 grid-rows-1 text-4xl text-slate-50">
        <div className="col-start-5 col-span-4 space-y-8">
          <div className="flex flex-wrap mt-8 space-x-6 justify-center" id="Ed_Acadia_logo">
            <img className="h-20 w-20" src={ioe_portal_logo} alt="ed_acadia_logo"></img>
            <h3 className="self-center font-bold">IOE PORTAL</h3>
          </div>
          {!clickNext ? (
            <>
              <SignUpComponent setClickNext={setClickNext} clickNext={clickNext} />
            </>
          ) : (
            <>
              <div className="font-bold text-primary text-2xl">
                <h3 className="font-bold">Tell Us about your current enrollment</h3>
              </div>
              {clickSemester ? (
                <>
                  <SignUpEnrollment
                    text={'Academic Session'}
                    datas={semester}
                    // setClick={setClickSemester}
                    // click={clickSemester}
                  />
                </>
              ) : (
                <>
                  {clickCampus ? (
                    <>
                      <SignUpEnrollment
                        text={'Available Courses'}
                        datas={courses}
                        // setClick={setClickSemester}
                        // click={clickSemester}
                      />
                    </>
                  ) : (
                    <>
                      <SignUpEnrollment
                        text={'Supported Campus'}
                        datas={campuses}
                        // setClick={setClickCampus}
                        // click={clickCampus}
                      />
                    </>
                  )}
                </>
              )}
              <div className="flex justify-end mt-6">
                <Button text={buttonText} varient={'primary'} handleClick={handleClick} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
