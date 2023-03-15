import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// use useAppDispatch & useAppSelector throughout the app instead of useDispatch & useSelector

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
