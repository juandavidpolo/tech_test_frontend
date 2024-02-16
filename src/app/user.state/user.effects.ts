import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setUser, resetUser } from './user.actions';
import { of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions) { }

  setUser$ = createEffect(() => this.actions$.pipe(
    ofType(setUser),
    mergeMap((action) => {
      console.log("test: ", action)
      return of(setUser(action));
    }),
    catchError(error => of(resetUser()))
  ));
}