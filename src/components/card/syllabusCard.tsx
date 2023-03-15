import clsx from 'clsx';
import ioe_logo_white from '@assets/logo/ioe_logo_white.svg';

interface ISyllabusCard {
  name?: string;
  color?: string;
  marks?: number;
  hours?: number;
}
interface ISyllabusCardProps {
  syllabus: ISyllabusCard;
}

export const SyllabusCard = ({ syllabus }: ISyllabusCardProps) => {
  const { name, color, marks, hours } = syllabus;
  return (
    <div
      className={clsx(
        `w-72 h-48 rounded-3xl p-4 space-y-5 font-semibold bg-syllabus-bg-img ${color}`,
      )}
    >
      <img src={ioe_logo_white} alt="ioe_logo_white" />
      <h2 className="text-2xl">{name}</h2>
      <div className="text-md text-slate-200 flex flex-row space-x-10">
        <h2>ME {marks}</h2>
        <h2>{hours} hours</h2>
      </div>
    </div>
  );
};
