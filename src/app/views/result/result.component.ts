import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { UserState, User } from '../../entity/user';
import { selectUser } from '../../selectors/selectors';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  user$!: Observable<any>;
  userData: any;

  constructor(private store: Store<User>, private router: Router) {
    const userDataJSON = localStorage.getItem('userData');
    this.userData = userDataJSON ? JSON.parse(userDataJSON) : {};
  }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(selectUser));
  }

  onClick() {
    localStorage.removeItem('userData');
    this.router.navigate(['']);
    /*
    this.user$.subscribe(user => {
      console.log("User:", user);
    });
    */
  }
}

@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ResultModule { }