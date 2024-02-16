import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../user.state/user.reducer';
import { initialState } from '../user.state/user.reducer'

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserData = createSelector(
  selectUserState,
  (state: UserState) => {
    console.log("state: ", state, initialState)
    return state.user
  }
);