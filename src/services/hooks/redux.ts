import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from "react-redux";

import { RootState } from "../../types/redux";
import { store } from "../store";

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = dispatchHook;
