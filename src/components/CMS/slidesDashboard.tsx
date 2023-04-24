import clsx from 'clsx';
import { Notes } from '@constants/notes';
import ChevronRight from '@assets/logo/chevron_down.svg';
import { SearchBar } from '@components/searchBar';

const NotesDashboard = () => {
  return (
    <body id="department">
      <ShowNotesCMS />
    </body>
  );
};

export default NotesDashboard;

const ShowNotesCMS = () => {
  return (
    <>
      <section className="flex flex-row gap-10 p-2 rounded-lg w-9/12 bg-bg-color-1 text-slate-100 child:font-semibold">
        <h1 className="text-lg">Slides</h1>
      </section>

      <main className="rounded-lg bg-bg-color-1 divide-y text-slate-100 p-2 w-9/12 child:p-2 ">
        <h1>All Slides</h1>
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
