import clsx from 'clsx';
import { Subjects } from '@constants/subjects';
import ChevronRight from '@assets/logo/chevron_down.svg';
import { SearchBar } from '@components/searchBar';
import { useState } from 'react';

interface ICreateSubjects {
  setaddSubject: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubjectDashboard = () => {
  const [addSubject, setaddSubject] = useState(false);
  return (
    <body id="subject">
      {addSubject ? (
        <CreateSubject setaddSubject={setaddSubject} />
      ) : (
        <ShowSubjectCMS setaddSubject={setaddSubject} />
      )}
    </body>
  );
};

export default SubjectDashboard;

const ShowSubjectCMS = ({ setaddSubject }: ICreateSubjects) => {
  return (
    <>
      <section className="flex flex-row gap-10 p-2 rounded-lg w-9/12 bg-bg-color-1 text-slate-100 child:font-semibold">
        <h1 className="text-lg">Subjects</h1>
        <button
          className="bg-primary p-1 rounded-lg text-black"
          onClick={() => {
            setaddSubject(true);
          }}
        >
          Add New
        </button>
      </section>

      <main className="rounded-lg bg-bg-color-1 divide-y text-slate-100 p-2 w-9/12 child:p-2 ">
        <h1>All Subjects</h1>
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
                <h1>Title</h1>
                <h1>Subject Code</h1>
                <h1>Description</h1>
                <h1>Chapters</h1>
              </li>
              {Subjects.map((subject, index) => {
                return (
                  <li
                    key={index}
                    className={clsx('flex flex-row p-2 justify-between', {
                      'bg-green-800': index % 2 === 0,
                    })}
                  >
                    <input type="checkbox" />
                    <h1>{subject.title}</h1>
                    <h1>{subject.subject_code}</h1>
                    <h1>{subject.description}</h1>
                    <h1>{subject.chapters}</h1>
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

const CreateSubject = ({ setaddSubject }: ICreateSubjects) => {
  return (
    <>
      <section className="flex flex-row gap-10 p-2 rounded-lg w-9/12 bg-bg-color-1 text-slate-100 child:font-semibold">
        <h1>Create New Subject</h1>
      </section>
      <main className="rounded-lg bg-bg-color-1 divide-y text-slate-100 p-2 w-9/12 child:p-2">
        <h1>New Subject</h1>
        <section className="flex gap-6">
          <div className="basis-1/2 flex flex-col gap-10 text-right child:pt-1">
            <h1>Title</h1>
            <h1>Subject Code</h1>
            <h1>Description</h1>
            <h1>Chapters</h1>
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
                setaddSubject(false);
              }}
            >
              Create Subject
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
