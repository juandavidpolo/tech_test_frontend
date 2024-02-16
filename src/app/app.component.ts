import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';

import { SearchComponent } from './views/search/search.component';
import { ResultComponent } from './views/result/result.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'technical_test_frontend';
}
