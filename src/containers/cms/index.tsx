import { useState } from 'react';
import { Button } from '@components/button';
import Settings from '@assets/logo/settings.svg';
import { Arrow } from '@components/arrow';
import { SideBar } from '@components/sidebar';
// import { InputField } from '@components/inputField';
import { SearchDashBoard, SettingDashBoard } from '@components/DashBoard';
import { DashBoard } from '@components/CMS';

const CMS = () => {
  const [dashboard, setDashboard] = useState('DashBoard');
  const [isSetting, setIsSetting] = useState(false);
  return (
    <div className="flex min-h-screen ">
      <div>
        <SideBar setDashboard={setDashboard} setIsSetting={setIsSetting} />
      </div>
      <div className="flex flex-col bg-bg-color-2  p-5 overflow-hidden">
        <div className="flex py-8 justify-between">
          <div className="text-slate-100 font-semibold text-3xl">Creator Admin</div>
          {!isSetting ? (
            <div className="flex gap-5">
              <Button
                varient="secondary"
                icon={<img src={Settings} alt="settings" />}
                text="Settings"
                size="lg"
                handleClick={() => setIsSetting(!isSetting)}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="">
          {isSetting ? (
            <SettingDashBoard />
          ) : (
            <>{dashboard == 'DashBoard' ? <DashBoard /> : <SearchDashBoard />}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default CMS;
