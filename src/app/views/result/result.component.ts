import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { clearUser } from '../../user.state/user.actions';
import { selectUserData } from '../../selectors/selectors';
import { AppState } from '../../entity/user';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() item = '';
  userData$: Observable<any> = new Observable<any>();
  userData: any;
  constructor(private store: Store<AppState>, private router: Router) {
    const userDataJSON = localStorage.getItem('userData');
    console.log("result: ", userDataJSON)
    this.userData = userDataJSON ? JSON.parse(userDataJSON) : {};
    this.userData$ = this.store.pipe(select(selectUserData));
    console.log("test: ", this.userData$)
  }

  ngOnInit() {
    this.userData$ = this.store.pipe(select(selectUserData));
  }

  onClick() {
    localStorage.removeItem('userData');
    this.store.dispatch(clearUser())
    this.router.navigate(['']);
  }
}