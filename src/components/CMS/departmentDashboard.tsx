import clsx from 'clsx';
import { Departments } from '@constants/department';
import ChevronRight from '@assets/logo/chevron_down.svg';
import { SearchBar } from '@components/searchBar';
import { useState } from 'react';

interface ICreateCampus {
  setAddDepartment: React.Dispatch<React.SetStateAction<boolean>>;
}

const DepartmentDashboard = () => {
  const [addDepartment, setAddDepartment] = useState(false);
  return (
    <body id="campus">
      {addDepartment ? (
        <CreateDepartment setAddDepartment={setAddDepartment} />
      ) : (
        <ShowDepartmentCMS setAddDepartment={setAddDepartment} />
      )}
    </body>
  );
};

export default DepartmentDashboard;

const ShowDepartmentCMS = ({ setAddDepartment }: ICreateCampus) => {
  return (
    <>
      <section className="flex flex-row gap-10 p-2 rounded-lg w-9/12 bg-bg-color-1 text-slate-100 child:font-semibold">
        <h1>Departments</h1>
        <button
          className="bg-primary p-1 rounded-lg text-black"
          onClick={() => {
            setAddDepartment(true);
          }}
        >
          Add New
        </button>
      </section>

      <main className="rounded-lg bg-bg-color-1 divide-y text-slate-100 p-2 w-9/12 child:p-2 ">
        <h1>All Departments</h1>
        <section>
          <div className="flex justify-between ">
            <button className="border border-primary rounded-xl min-w-fit h-10 p-2 flex flex-row gap-2">
              Action for Selected
              <img src={ChevronRight} alt="chevronRight" />
            </button>
            <SearchBar />
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex flex-row justify-between">
                <input type="checkbox" />
                <h1>Name</h1>
                <h1>Semesters</h1>
              </li>
              {Departments.map((department, index) => {
                return (
                  <li
                    key={index}
                    className={clsx('flex flex-row p-2 justify-between', {
                      'bg-green-800': index % 2 === 0,
                    })}
                  >
                    <input type="checkbox" />
                    <h1>{department.name}</h1>
                    <h1>{department.semesters}</h1>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

const CreateDepartment = ({ setAddDepartment }: ICreateCampus) => {
  return (
    <>
      <section className="flex flex-row gap-10 p-2 rounded-lg w-9/12 bg-bg-color-1 text-slate-100 child:font-semibold">
        <h1>Create New Department</h1>
      </section>
      <main className="rounded-lg bg-bg-color-1 divide-y text-slate-100 p-2 w-9/12 child:p-2">
        <h1>New Department</h1>
        <section className="flex gap-6">
          <div className="basis-1/2 flex flex-col gap-10 text-right child:pt-1">
            <h1>Title</h1>
            <h1>Semesters</h1>
          </div>
          <div className="flex flex-col gap-4 text-black">
            <input
              type="text"
              className="ring-1 ring-primary  rounded-md p-3 bg-gray-500 border border-primary"
            />
            <input
              type="text"
              className="ring-1 ring-primary  rounded-md p-3 bg-gray-500 border border-primary"
            />
            <button
              className="p-2 bg-primary rounded-md text-black font-semibold w-48"
              onClick={() => {
                setAddDepartment(false);
              }}
            >
              Create Department
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
