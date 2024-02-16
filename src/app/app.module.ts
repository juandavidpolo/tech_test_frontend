import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './user.state/user.reducer';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterOutlet,
    StoreModule.forRoot({userData: userReducer})],
  providers: [],
  bootstrap: [],
})
export class AppModule { }

