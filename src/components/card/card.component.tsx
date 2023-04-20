import { FC, ReactElement } from 'react';
import clsx from 'clsx';
// import logo_green from '@assets/logo/logo_ed_acadia_green.svg';
import signal from '@assets/logo/wave-sine.svg';
import math from '@assets/logo/math-symbols.svg';
import ioe_logo_white from '@assets/logo/ioe_logo_white.svg';
import ioe_logo_small from '@assets/logo/ioe_logo_small.svg';

interface ICardProps {
  isDisabled?: boolean;
  handleClick?: () => void;
  varient?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  img?: string;
  subjectName?: string;
  content?: string;
  text?: string;
  showIcon?: boolean;
  icon?: string;
  isSearchCard?: boolean;
  bgcolor?: string;
  type?: string;
}

interface IsSearchCardProps {
  bgcolor?: string;
  text?: string;
  icon?: string;
}

export const Card = (props: ICardProps): ReactElement => {
  const {
    isDisabled = false,
    handleClick = () => null,
    size = 'md',
    varient = 'primary',
    type = 'Free',
    subjectName = 'Math',
    content = 'signal',
    text = 'Enginering Note',
    showIcon = true,
    img = null,
    icon = ioe_logo_small,
    isSearchCard = false,
    bgcolor = '',
  } = props;
  return (
    <div className="flex justify-around flex-wrap">
      {isSearchCard ? (
        <SearchCard bgcolor={bgcolor} icon={icon} text={text} />
      ) : (
        <div
          className={clsx('rounded-xl cursor-pointer p-2 px-4 shadow-2xl bg-gray-800 ', {
            'max-w-[300px] max-h-[330px]': size === 'lg',
            'max-w-[240px] max-h-[250px]': size === 'md',
            'max-w-[160px] max-h-[160px]': size === 'sm',
          })}
        >
          <div
            className="p-2"
            onClick={handleClick}
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            {img ? (
              <div className="relative flex flex-col">
                <img className="absolute p-2" src={ioe_logo_small} alt="logo-ed-acadia" />
                <img
                  className={clsx('rounded-2xl', {
                    'max-w-[250px] max-h-[250px]': size === 'lg',
                    'min-w-[150px] min-h-[150px]': size === 'md',
                    'max-w-[120px] max-h-[120px]': size === 'sm',
                  })}
                  src={img}
                  alt=""
                />
              </div>
            ) : (
              <div className="rounded-2xl p-2 bg-blue-300">
                <div
                  className={clsx('flex flex-col justify-center items-center', {
                    'max-w-[250px] max-h-[300px]': size === 'lg',
                    'min-w-[150px] min-h-[150px]': size === 'md',
                    'max-w-[120px] max-h-[120px]': size === 'sm',
                  })}
                >
                  <img className="p-2 self-start" src={ioe_logo_white} alt="logo-ed-acadia" />
                  {content === 'signal' && <img className="" src={signal} alt="signal" />}
                  {content === 'math' && <img className="" src={math} alt="math" />}
                  <span
                    className="text-xl pl-2 self-start text-white
                "
                  >
                    {content}
                  </span>
                </div>
              </div>
            )}
            <div className="p-1 fill-green-500">
              {showIcon && (
                <div className="flex items-center text-center text-primary text-xs font-medium">
                  <img className="pr-1" src={ioe_logo_small} alt="logo-ed-acadia" />
                  <h2>{type}</h2>
                </div>
              )}
              <p className="text-white text-sm">{subjectName}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

const SearchCard = ({ bgcolor, icon, text }: IsSearchCardProps) => {
  return (
    <div
      className={clsx('text-slate-200 rounded-3xl w-[200px] h-[200px] grid grid-cols-5', bgcolor)}
    >
      <div className="col-start-2 justify-self-center text-start pt-4">
        <h3>{text}</h3>
      </div>
      <div className="col-start-5 flex flex-wrap justify-self-start content-end">
        <img className="pr-1 h-12" src={icon} alt="logo-ed-acadia" />
      </div>
    </div>
  );
};
