import { Spinner } from '@components/spinner';
import clsx from 'clsx';
import { ReactElement } from 'react';
import ArrowIcon from '@assets/logo/arrow.svg';
interface IArrowProps {
  leftHandleClick?: () => void;
  rightHandleClick?: () => void;
  varient?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
}

export const Arrow = (props: IArrowProps): ReactElement => {
  const {
    leftHandleClick = () => null,
    rightHandleClick = () => null,
    size = 'base',
    varient = 'primary',
  } = props;
  return (
    <div className="flex gap-1 ">
      <div
        className={clsx(
          'flex justify-center items-center  bg-gray-600 w-6 h-6 rounded-full cursor-pointer opacity-75 hover:opacity-100',
          {
            'border-primary': varient === 'primary',
            'border-white': varient === 'secondary',
          },
        )}
        onClick={leftHandleClick}
      >
        {' '}
        <img src={ArrowIcon} alt="arrow" />
      </div>
      <div
        className={clsx(
          'flex justify-center items-center bg-gray-600 w-6 h-6 rounded-full cursor-pointer rotate-180 opacity-75 hover:opacity-100',
          {
            'border-primary ': varient === 'primary',
            'border-white': varient === 'secondary',
          },
        )}
        onClick={rightHandleClick}
      >
        <img src={ArrowIcon} alt="arrow" />
      </div>
    </div>
  );
};
