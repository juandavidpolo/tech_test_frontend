import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './views/search/search.component';
import { ResultComponent } from './views/result/result.component';

//import { SearchModule } from './views/search/search.component';
import { ResultModule } from './views/result/result.module';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: '/result', component: ResultComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    SearchComponent,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

