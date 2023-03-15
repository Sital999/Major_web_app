import { books } from '@constants/books';
import { syllabuses } from '@constants/syllabus';
import { routines } from '@constants/routine';
import { Card, RoutineCard, SyllabusCard } from '@components/card';
import { useState } from 'react';

const HomeDashboard = () => {
  const [clicked, setClicked] = useState(0);
  return (
    <div className="flex flex-col gap-3 bg-bg-color-1 p-4 rounded-xl">
      <span className="py-2 text-2xl text-white">Books for You</span>
      <div className="gap-8 flex flex-row flex-wrap justify-around">
        {books.map((book, index) => {
          return <Card key={index} img={book.image} subjectName={book.name} size={'lg'} />;
        })}
      </div>
      <span className="py-2 text-2xl text-white">BCT 8th Semester</span>
      <div className="gap-8 flex flex-row flex-wrap justify-around">
        {books.map((book, index) => {
          return <Card key={index} img={book.image} subjectName={book.name} size={'lg'} />;
        })}
      </div>
      <span className="py-2 text-2xl text-white">Syllabus</span>
      <div className="gap-8 flex flex-row flex-wrap justify-around">
        {syllabuses.map((syllabus, index) => {
          return <SyllabusCard key={index} syllabus={syllabus} />;
        })}
      </div>
      <span className="py-2 text-2xl text-white">Routine</span>
      <div className="gap-8 flex flex-row flex-wrap justify-around">
        {routines.map((routine, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setClicked(index);
              }}
            >
              <RoutineCard routine={routine} clicked={clicked} index={index} />
            </div>
          );
        })}
      </div>
      <span className="py-2 text-2xl text-white">Question Banks</span>
      <div className="gap-8 flex flex-row flex-wrap justify-around">
        {books.map((book, index) => {
          return <Card key={index} img={book.image} subjectName={book.name} size={'lg'} />;
        })}
      </div>
      <span className="py-2 text-2xl text-white">Recommended For Current Exam</span>
      <div className="gap-8 flex flex-row flex-wrap justify-around">
        {books.map((book, index) => {
          return <Card key={index} img={book.image} subjectName={book.name} size={'lg'} />;
        })}
      </div>
    </div>
  );
};

export default HomeDashboard;
