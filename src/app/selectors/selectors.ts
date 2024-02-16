import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User, UserState } from '../entity/user';

export const selectUserState = createFeatureSelector<User>('user');

export const selectUser = createSelector(
  selectUserState,
  (state: User) => state
);