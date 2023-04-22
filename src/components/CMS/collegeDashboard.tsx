import clsx from 'clsx';
import { Colleges } from '@constants/college';
import ChevronRight from '@assets/logo/chevron_down.svg';
import { SearchBar } from '@components/searchBar';
import { useState } from 'react';

interface ICreateCampus {
  setAddCollege: React.Dispatch<React.SetStateAction<boolean>>;
}

const CollegeDashboard = () => {
  const [addCollege, setAddCollege] = useState(false);
  return (
    <body id="campus">
      {addCollege ? (
        <CreateCollege setAddCollege={setAddCollege} />
      ) : (
        <ShowCampusCMS setAddCollege={setAddCollege} />
      )}
    </body>
  );
};

export default CollegeDashboard;

const ShowCampusCMS = ({ setAddCollege }: ICreateCampus) => {
  return (
    <>
      <section className="flex flex-row gap-10 p-2 rounded-lg w-9/12 bg-bg-color-1 text-slate-100 child:font-semibold">
        <h1>Campus</h1>
        <button
          className="bg-primary p-1 rounded-lg text-black"
          onClick={() => {
            setAddCollege(true);
          }}
        >
          Add New
        </button>
      </section>

      <main className="rounded-lg bg-bg-color-1 divide-y text-slate-100 p-2 w-9/12 child:p-2 ">
        <h1>All Campus</h1>
        <section>
          <div className="flex justify-between ">
            <button className="border border-primary rounded-xl min-w-fit h-10 p-2 flex flex-row gap-2">
              Action for Selected
              <img src={ChevronRight} alt="chevronRight" />
            </button>
            <SearchBar />
          </div>
          <div>
            <ul className="space-y-8">
              <li className="flex flex-row gap-48">
                <input type="checkbox" />
                <h1>Name</h1>
                <h1>University</h1>
                <h1>Location</h1>
                <h1>Department</h1>
              </li>
              {Colleges.map((college, index) => {
                return (
                  <li
                    key={index}
                    className={clsx('flex flex-row gap-40 p-2', {
                      'bg-green-800': index % 2 === 0,
                    })}
                  >
                    <input type="checkbox" />
                    <h1>{college.name}</h1>
                    <h1>{college.university}</h1>
                    <h1>{college.location}</h1>
                    <h1>{college.departments}</h1>
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

const CreateCollege = ({ setAddCollege }: ICreateCampus) => {
  return (
    <>
      <section className="flex flex-row gap-10 p-2 rounded-lg w-9/12 bg-bg-color-1 text-slate-100 child:font-semibold">
        <h1>Create New College</h1>
      </section>
      <main className="rounded-lg bg-bg-color-1 divide-y text-slate-100 p-2 w-9/12 child:p-2">
        <h1>New College</h1>
        <section className="flex gap-6">
          <div className="basis-1/2 flex flex-col gap-10 text-right child:pt-1">
            <h1>Title</h1>
            <h1>university</h1>
            <h1>Location</h1>
            <h1>Description</h1>
            <h1>Department</h1>
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
            <input
              type="text"
              className="ring-1 ring-primary  rounded-md p-3 bg-gray-500 border border-primary"
            />
            <button
              className="p-2 bg-primary rounded-md text-black font-semibold w-32"
              onClick={() => {
                setAddCollege(false);
              }}
            >
              Create College
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
