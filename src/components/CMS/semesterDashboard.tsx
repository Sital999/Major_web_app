import clsx from 'clsx';
import { Semesters } from '@constants/semester';
import ChevronRight from '@assets/logo/chevron_down.svg';
import { SearchBar } from '@components/searchBar';
import { useState } from 'react';

interface ICreateSemester {
  setAddSemester: React.Dispatch<React.SetStateAction<boolean>>;
}

const SemesterDashboard = () => {
  const [addSemester, setAddSemester] = useState(false);
  return (
    <body id="subject">
      {addSemester ? (
        <CreateSemester setAddSemester={setAddSemester} />
      ) : (
        <ShowSemesterCMS setAddSemester={setAddSemester} />
      )}
    </body>
  );
};

export default SemesterDashboard;

const ShowSemesterCMS = ({ setAddSemester }: ICreateSemester) => {
  return (
    <>
      <section className="flex flex-row gap-10 p-2 rounded-lg w-9/12 bg-bg-color-1 text-slate-100 child:font-semibold">
        <h1 className="text-lg">Semesters</h1>
        <button
          className="bg-primary p-1 rounded-lg text-black"
          onClick={() => {
            setAddSemester(true);
          }}
        >
          Add New
        </button>
      </section>

      <main className="rounded-lg bg-bg-color-1 divide-y text-slate-100 p-2 w-9/12 child:p-2 ">
        <h1>All Semesters</h1>
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
                <h1>Value</h1>
                <h1>Start Date</h1>
                <h1>End Date</h1>
                <h1>Subjects</h1>
              </li>
              {Semesters.map((semester, index) => {
                return (
                  <li
                    key={index}
                    className={clsx('flex flex-row p-2 justify-between', {
                      'bg-green-800': index % 2 === 0,
                    })}
                  >
                    <input type="checkbox" />
                    <h1>{semester.value}</h1>
                    <h1>{semester.start_Date}</h1>
                    <h1>{semester.end_Date}</h1>
                    <h1>{semester.subjects}</h1>
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

const CreateSemester = ({ setAddSemester }: ICreateSemester) => {
  return (
    <>
      <section className="flex flex-row gap-10 p-2 rounded-lg w-9/12 bg-bg-color-1 text-slate-100 child:font-semibold">
        <h1>Create New Semester</h1>
      </section>
      <main className="rounded-lg bg-bg-color-1 divide-y text-slate-100 p-2 w-9/12 child:p-2">
        <h1>New Semester</h1>
        <section className="flex gap-6">
          <div className="basis-1/2 flex flex-col gap-10 text-right child:pt-1">
            <h1>Value</h1>
            <h1>Start Date</h1>
            <h1>End Date</h1>
            <h1>Subjects</h1>
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
                setAddSemester(false);
              }}
            >
              Create Semester
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
