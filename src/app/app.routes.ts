import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './views/search/search.component';
import { ResultComponent } from './views/result/result.component';

export const routes: Routes = [
  { path: '', title:"Search User", component: SearchComponent },
  { path: 'result', title:"User Result", component: ResultComponent },
  //{ path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
