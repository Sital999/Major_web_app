import clsx from 'clsx';

interface IRoutineCard {
  subjectName?: string;
  teacherName?: string;
  startTime?: string;
  endTime?: string;
}
interface IRoutineCardProps {
  routine: IRoutineCard;
  clicked: number;
  index: number;
}

export const RoutineCard = ({ routine, clicked, index }: IRoutineCardProps) => {
  const { subjectName, teacherName, startTime, endTime } = routine;
  return (
    <div
      className={clsx(
        'w-72 h-40 rounded-3xl p-4 text-gray-500 text-md font-semibold bg-black flex flex-row justify-between ring-4 ',
        {
          'ring-green-500': clicked !== index,
          'ring-red-500': clicked === index,
        },
      )}
    >
      <div className=" flex flex-col w-1/2 gap-2 justify-between">
        <h2 className="text-xl text-slate-100">{subjectName}</h2>
        <h2>{teacherName}</h2>
      </div>
      <div className="text-md flex flex-col space-y-2">
        <h2>From {startTime}</h2>
        <h2>To {endTime}</h2>
      </div>
    </div>
  );
};
