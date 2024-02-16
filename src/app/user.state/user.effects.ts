import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { setUser } from './user.actions';

@Injectable()
export class UserEffects {
  setUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setUser),
      tap(action => {
        console.log("test: ", action)
        localStorage.setItem('userData', JSON.stringify(action.user));
      })
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) { }
}