import { UserState, User } from '../entity/user';
import { createReducer, on } from '@ngrx/store';
import { setUser, resetUser, getUser } from './user.actions';

export const initialState: UserState = {
  isSet: false,
  user: {
    firstName: "",
    middleName: "",
    lastName1: "",
    lastName2: "",
    phone: "",
    address: "",
    city: ""
  }
};

export const userReducer = createReducer(
  initialState,
  on(resetUser, (state) => initialState),
  on(setUser, (state, payload) => {
    console.log("test: ", state)
    return {
      ...state, user: payload
    }

  }),
  on(getUser, (state) => (state)),
);
