import { createAction, props } from '@ngrx/store';
import { UserState, User } from '../entity/user';

export const setUser = createAction('setUser', props<User>());
export const resetUser = createAction('clearUser');
export const getUser = createAction('getUser');