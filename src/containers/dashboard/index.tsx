import { useState } from 'react';
import { Button } from '@components/button';
import Settings from '@assets/logo/settings.svg';
import { Arrow } from '@components/arrow';
import { SideBar } from '@components/sidebar';
// import { InputField } from '@components/inputField';
import { HomeDashboard, SearchDashBoard, SettingDashBoard } from '@components/DashBoard';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState('Home');
  const [isSetting, setIsSetting] = useState(false);
  const [academic, setAcademic] = useState('');
  const [content, setContent] = useState('');
  return (
    <div className="flex">
      <div>
        <SideBar
          setDashboard={setDashboard}
          setIsSetting={setIsSetting}
          setAcademic={setAcademic}
          setContent={setContent}
        />
      </div>
      <div className="flex flex-col bg-bg-color-2  p-5 overflow-hidden">
        <Arrow
          leftHandleClick={() => console.log('left')}
          rightHandleClick={() => console.log('right')}
        />
        <div className="flex py-8 justify-between">
          <div className="text-primary font-semibold text-3xl">
            Hello, <span className="text-xl text-white font-normal">John Doe</span>
          </div>
          {!isSetting ? (
            <div className="flex gap-5">
              <Button varient="secondary" text="Upgrade" size="lg" isDisabled />
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
        <div className="flex flex-col gap-3 bg-bg-color-1 p-4 rounded-xl">
          {isSetting ? (
            <SettingDashBoard />
          ) : (
            <>{dashboard == 'Home' ? <HomeDashboard /> : <SearchDashBoard />}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
