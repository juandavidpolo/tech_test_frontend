import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  user: any;
}

export const initialState: UserState = {
  user: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.setUser, (state, { user }) => {
    console.log("set User: ", user)
    return { ...state, user }
  }),
  on(UserActions.clearUser, state => ({ ...state, user: null }))
);
