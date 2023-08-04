import {TypedUseSelectorHook, useDispatch as useDefaultDispatch, useSelector as useDefaultSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store";

export const useDispatch: () => AppDispatch = useDefaultDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useDefaultSelector;