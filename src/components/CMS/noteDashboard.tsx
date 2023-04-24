import clsx from 'clsx';
import { Notes } from '@constants/notes';
import ChevronRight from '@assets/logo/chevron_down.svg';
import { SearchBar } from '@components/searchBar';
import { useState } from 'react';

interface ICreateNotes {
  setAddNotes: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotesDashboard = () => {
  const [addNotes, setAddNotes] = useState(false);
  return (
    <body id="department">
      {addNotes ? (
        <CreateNotes setAddNotes={setAddNotes} />
      ) : (
        <ShowNotesCMS setAddNotes={setAddNotes} />
      )}
    </body>
  );
};

export default NotesDashboard;

const ShowNotesCMS = ({ setAddNotes }: ICreateNotes) => {
  return (
    <>
      <section className="flex flex-row gap-10 p-2 rounded-lg w-9/12 bg-bg-color-1 text-slate-100 child:font-semibold">
        <h1 className="text-lg">Notes</h1>
        <button
          className="bg-primary p-1 rounded-lg text-black"
          onClick={() => {
            setAddNotes(true);
          }}
        >
          Add New
        </button>
      </section>

      <main className="rounded-lg bg-bg-color-1 divide-y text-slate-100 p-2 w-9/12 child:p-2 ">
        <h1>All Notes </h1>
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
                <h1>Views</h1>
                <h1>Royalty</h1>
              </li>
              {Notes.map((note, index) => {
                return (
                  <li
                    key={index}
                    className={clsx('flex flex-row p-2 justify-between', {
                      'bg-green-800': index % 2 === 0,
                    })}
                  >
                    <input type="checkbox" />
                    <h1>{note.title}</h1>
                    <h1>{note.views}</h1>
                    <h1>{note.royalty}</h1>
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

const CreateNotes = ({ setAddNotes }: ICreateNotes) => {
  return (
    <>
      <section className="flex flex-row gap-10 p-2 rounded-lg w-9/12 bg-bg-color-1 text-slate-100 child:font-semibold">
        <h1>Create New Notes and Slides</h1>
      </section>
      <main className="rounded-lg bg-bg-color-1 divide-y text-slate-100 p-2 w-9/12 child:p-2">
        <h1>New Notes and Slides</h1>
        <section className="flex gap-6">
          <div className="basis-1/2 flex flex-col gap-10 text-right child:pt-1">
            <h1>Title</h1>
            <h1>SubTitle</h1>
            <h1>File</h1>
            <h1>Category</h1>
            <h1>Campus</h1>
            <h1>Department</h1>
            <h1>Semester</h1>
            <h1>Subject</h1>
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
              type="file"
              className="ring-1 ring-primary  rounded-md p-3 bg-gray-500 border border-primary"
            />
            <div className="flex justify-around child:flex child:gap-2 ring-1 ring-primary  rounded-md p-3 bg-gray-500 border border-primary gap-10">
              <section>
                <input type="radio" name="content" className="w-6 mt-1" />
                <h1>Slides</h1>
              </section>
              <section>
                <input type="radio" name="content" className="w-6 mt-1" />
                <h1>Notes</h1>
              </section>
            </div>

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
                setAddNotes(false);
              }}
            >
              Create Content
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
