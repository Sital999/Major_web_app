import logout from '@assets/logo/logout.svg';

const SettingDashBoard = () => {
  return (
    <div className="text- flex flex-col w-screen min-h-fit p-6 gap-10">
      <h2 className="text-4xl text-slate-50">Settings</h2>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-slate-100">Account</h2>
        <div className="Email text-gray-400 flex lg:flex-row xs:flex-col justify-between">
          <h2 className="text-xl text-slate-200">Email</h2>
          <input
            type="email"
            readOnly
            placeholder="admin@gmail.com"
            className=" bg-black border-b-2 border-slate-400 sm:w-96 ss:w-64 xs:w-48 outline-none md:mr-96 text-end"
          />
        </div>
        <div className="Password text-gray-400 flex lg:flex-row xs:flex-col  lg:justify-between justify-end">
          <h2 className="text-xl text-slate-200">Password</h2>
          <input
            type="text"
            readOnly
            placeholder="Change Password"
            className=" bg-black border-b-2 border-slate-400 sm:w-96 ss:w-64 xs:w-48 outline-none md:mr-96 text-end"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-slate-100">Campus</h2>
        <div className="Email text-gray-400 flex lg:flex-row xs:flex-col  lg:justify-between justify-end">
          <h2 className="text-xl text-slate-200">College</h2>
          <input
            type="text"
            readOnly
            placeholder="Pulchow Campus,IOE, TU"
            className=" bg-black border-b-2 border-slate-400 sm:w-96 ss:w-64 xs:w-48 outline-none md:mr-96 text-end"
          />
        </div>
        <div className="Password text-gray-400 flex lg:flex-row xs:flex-col  lg:justify-between justify-end">
          <h2 className="text-xl text-slate-200">Course</h2>
          <input
            type="text"
            readOnly
            placeholder="Computer Engineering"
            className=" bg-black border-b-2 border-slate-400 sm:w-96 ss:w-64 xs:w-48 outline-none md:mr-96 text-end"
          />
        </div>
        <div className="Password text-gray-400 flex lg:flex-row xs:flex-col  lg:justify-between justify-end">
          <h2 className="text-xl text-slate-200">Semester</h2>
          <input
            type="text"
            placeholder="Eighth"
            readOnly
            className=" bg-black border-b-2 border-slate-400 sm:w-96 ss:w-64 xs:w-48 outline-none md:mr-96 text-end"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-slate-100">Cache</h2>
        <div className="Email text-gray-400 flex lg:flex-row xs:flex-col  lg:justify-between justify-end">
          <div className="flex flex-col w-36">
            <h2 className="text-xl text-slate-100">BackUp Course</h2>
            <p className="text-sm">Backup all the course material of current syllabus</p>
          </div>
          <div className="md:mr-72 pr-4">
            <ToggleButton />
          </div>
        </div>
        <div className="Password text-gray-400 flex lg:flex-row xs:flex-col  lg:justify-between justify-end">
          <h2 className="text-xl text-slate-200">Logout</h2>
          <div className="md:mr-96">
            <img src={logout} alt="logout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingDashBoard;

const ToggleButton = () => {
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
      </label>
    </>
  );
};
