import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListLivreComponent} from './list-livre/list-livre.component';
import {AddLivreComponent} from './add-livre/add-livre.component';
import {EditLivreComponent} from './edit-livre/edit-livre.component';


const routes: Routes = [
  {path: '', redirectTo: 'livre/list', pathMatch: 'full'},
  {path: 'livre/list', component: ListLivreComponent},
  {path: 'livre/add', component: AddLivreComponent},
  {path: 'livre/edit/:id', component: EditLivreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
