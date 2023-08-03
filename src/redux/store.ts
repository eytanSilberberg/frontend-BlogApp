import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"; 
import  postReducer  from "./features/postSlice";

export const store = configureStore({
    reducer: {
        post: postReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;