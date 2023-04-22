import React, { useState } from 'react';
// import clsx from 'clsx';
import { Button } from '@components/button';
import Logo from '@assets/logo/ioe_portal_logo.svg';
// import Home from '@assets/logo/homeIcon.svg';
// import Library from '@assets/logo/library.svg';
// import Search from '@assets/logo/search.svg';
import DashBoard from '@assets/logo/dashboard.svg';
import Academia from '@assets/logo/academia.svg';
import Content from '@assets/logo/content.svg';
import College from '@assets/logo/college.svg';
import Semester from '@assets/logo/semester.svg';
import Department from '@assets/logo/department.svg';
import Subjects from '@assets/logo/subjects.svg';

import Install from '@assets/logo/install.svg';

interface ISideBarProps {
  setDashboard: React.Dispatch<React.SetStateAction<string>>;
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
  setAcademic: React.Dispatch<React.SetStateAction<string>>;
}

export const SideBar = ({ setDashboard, setIsSetting, setAcademic }: ISideBarProps) => {
  const [hiddenAcademic, setHiddenAcademic] = useState(true);
  return (
    <div className=" bg-bg-color-1 h-full w-72">
      <div className="sticky top-4 left-1">
        <div className="flex flex-col justify-center gap-4 mb-32">
          <div className="px-20 text-slate-50 font-bold text-xl">
            <img src={Logo} width={'100%'} height={'auto'} alt="logo" />
            <h2>IOE PORTAL</h2>
          </div>
          <div className="child:py-2">
            <Button
              varient="null"
              icon={<img src={DashBoard} alt="DashBoard" />}
              text="DashBoard"
              size="lg"
              isMenu
              handleClick={() => {
                setHiddenAcademic(true);
                setDashboard('DashBoard');
                setIsSetting(false);
              }}
            />
            <Button
              varient="null"
              icon={<img src={Academia} alt="Academia" />}
              text="Academia"
              size="lg"
              isMenu
              isChevron
              handleClick={() => {
                setDashboard('Academia');
                setHiddenAcademic(!hiddenAcademic);
                setIsSetting(false);
              }}
            />
            <div hidden={hiddenAcademic}>
              <Button
                varient="null"
                icon={<img src={College} alt="College" />}
                text="College"
                size="base"
                isMenu
                handleClick={() => {
                  setAcademic('College');
                }}
              />

              <Button
                varient="null"
                icon={<img src={Semester} alt="Semester" />}
                text="Semester"
                size="base"
                isMenu
                handleClick={() => {
                  setAcademic('Semester');
                }}
              />
              <Button
                varient="null"
                icon={<img src={Subjects} alt="Subjects" />}
                text="Subjects"
                size="base"
                isMenu
                handleClick={() => {
                  setAcademic('Subjects');
                }}
              />
              <Button
                varient="null"
                icon={<img src={Department} alt="Department" />}
                text="Department"
                size="base"
                isMenu
                handleClick={() => {
                  setAcademic('Department');
                }}
              />
            </div>
            <Button
              varient="null"
              icon={<img src={Content} alt="Content" />}
              text="Content"
              size="lg"
              isMenu
              isChevron
              handleClick={() => {
                setHiddenAcademic(true);
                // setDashboard('Content');
              }}
            />
          </div>
          <div className="h-1 self-center w-[80%] bg-bg-color-2" />

          <Button
            icon={<img src={Install} alt="Install" />}
            varient="null"
            text="Install App"
            size="sm"
            isMenu
          />
        </div>
        {/* <Card size={'md'} /> */}
      </div>
    </div>
  );
};

export default SideBar;
