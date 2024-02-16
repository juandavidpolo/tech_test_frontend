import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { setUser, resetUser } from '../../user.state/user.actions';

import { UserState } from '../../entity/user';
import { selectUser } from '../../selectors/selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isDisabled: boolean;
  type: string;
  number: string;

  constructor(private store: Store<UserState>, private router: Router) {
    this.isDisabled = true;
    this.type = "";
    this.number = "";
  }

  ngOnInit(): void {
    this.store.pipe(select(selectUser)).subscribe(user => {
      if (user) {
        this.router.navigate(['/result']);
      }
    });
  }

  setUserIfValid() {
    if (this.type === "c" && this.getNumberWithoutThousandSeparators(this.number) === "23445322") {
      const user = {
        firstName: "Juan",
        middleName: "David",
        lastName1: "Polo",
        lastName2: "Mendez",
        phone: "+573167530428",
        address: "Cra 23 # 23 - 32",
        city: "Neiva",
      }
      console.log("user: ", user)
      this.store.pipe(select(selectUser)).subscribe(currentUser => {
        console.log("currentUser: ", currentUser)
        if (!currentUser) {
          this.store.dispatch(setUser(user));
          this.router.navigate(['/result']);
        }
      });
    }
  }

  resetUser() {
    this.store.dispatch(resetUser());
  }

  onInputChange(event: Event){
    let inputName = (event.target as HTMLInputElement).name;
    let inputValue = (event.target as HTMLInputElement).value;
    switch(inputName){
      case "type":
        this.type = inputValue;
        break;
      case "number":
        let formattedNumber = this.formatNumber(inputValue.length > 11 ? inputValue.slice(0, 11) : inputValue)
        this.number = formattedNumber;
        break;
      default:
        break;
    }
    this.updateButtonState()
  }

  updateButtonState() {
    if (this.type !== "" && this.number.length > 8) {
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }

  private formatNumber(inputValue: string): string {
    const numericValue = parseFloat(inputValue.replace(/,/g, ''));
    if (!isNaN(numericValue)) {
      return numericValue.toLocaleString();
    } else {
      return '';
    }
  }

  private getNumberWithoutThousandSeparators(number: string): string {
    return number.replace(/,/g, '');
  }
}

@NgModule({
  declarations: [SearchComponent],
  imports: [FormsModule]
})
export class SearchModule { }
