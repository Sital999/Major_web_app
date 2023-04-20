import React from 'react';
// import clsx from 'clsx';
import { Button } from '@components/button';
import Logo from '@assets/logo/ioe_portal_logo.svg';
// import Home from '@assets/logo/homeIcon.svg';
// import Library from '@assets/logo/library.svg';
// import Search from '@assets/logo/search.svg';
import DashBoard from '@assets/logo/dashboard.svg';
import Academia from '@assets/logo/academia.svg';
import Content from '@assets/logo/content.svg';

import Install from '@assets/logo/install.svg';

interface ISideBarProps {
  setDashboard: React.Dispatch<React.SetStateAction<string>>;
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar = ({ setDashboard, setIsSetting }: ISideBarProps) => {
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
                // setDashboard('Academia');
                setIsSetting(false);
              }}
            />

            <Button
              varient="null"
              icon={<img src={Content} alt="Content" />}
              text="Content"
              size="lg"
              isMenu
              isChevron
              handleClick={() => {
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
