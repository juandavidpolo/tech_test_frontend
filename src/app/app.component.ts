import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SearchComponent } from './views/search/search.component';
import { ResultComponent } from './views/result/result.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'technical_test_frontend';
}
