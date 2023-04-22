// import { Spinner } from '@components/spinner';
import clsx from 'clsx';
import { ReactElement, useState } from 'react';
import ChevronDown from '@assets/logo/chevron_down.svg';
import ChevronRight from '@assets/logo/chevron_right.svg';

interface IButtonProps {
  isDisabled?: boolean;
  handleClick?: () => void;
  varient?: 'primary' | 'secondary' | 'null';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  borderSize?: 'base' | 'full' | 'fit';
  className?: string;
  text?: string;
  icon?: ReactElement | null;
  isMenu?: boolean;
  isChevron?: boolean;
}

export const Button = (props: IButtonProps): ReactElement => {
  const {
    isDisabled = false,
    handleClick = () => null,
    size = 'base',
    varient = 'null',
    text = 'Button Text',
    icon = null,
    borderSize = 'base',
    isMenu = false,
    className = '',
    isChevron = false,
  } = props;
  const [click, setClick] = useState(false);
  return (
    <div className={clsx('flex space-x-2 justify-center ', className)}>
      <button
        disabled={isDisabled}
        type="button"
        className={clsx(
          'inline-block px-4 font-medium text-center text-white rounded-xl  focus:outline-none focus:ring-0 transition duration-150 ease-in-out',
          {
            'p-1 border-primary text-white ring-2 ring-primary focus:ring-2 focus:border-primary focus:ring-primary':
              varient === 'primary',
            'border-white text-white ring-2 ring-slate-300 focus:ring-2 focus:border-primary focus:ring-primary p-1':
              varient === 'secondary',
            '': varient === 'null',
            'disabled:opacity-50 disabled:cursor-not-allowed': isDisabled,
            'w-full': borderSize === 'full',
            'w-4/5': borderSize === 'fit',
            'w-auto': borderSize === 'base',
            'border-[1px] rounded-full': !isMenu,
          },
        )}
        onClick={() => {
          handleClick();
          setClick(!click);
        }}
      >
        <span
          className={clsx('flex justify-start  gap-3', {
            'text-xs': size === 'xs',
            'text-sm': size === 'sm',
            'text-base': size === 'base',
            'text-lg': size === 'lg',
            'text-xl': size === 'xl',
          })}
        >
          <div className={clsx('w-8', { 'w-0': icon === null })}>{icon}</div>
          <div
            className={clsx({
              'w-auto': isChevron === false,
            })}
          >
            {text}
          </div>
          <div className={clsx({ 'w-8 mt-1': isChevron === true, 'w-0': isChevron === false })}>
            {isChevron && <img src={click ? ChevronDown : ChevronRight} alt="chevron_down"></img>}
          </div>
        </span>
      </button>
    </div>
  );
};
