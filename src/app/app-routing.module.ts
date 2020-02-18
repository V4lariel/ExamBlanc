import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AddShoesComponent} from "./components/add-shoes/add-shoes.component";
import {EditShoesComponent} from "./components/edit-shoes/edit-shoes.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: DashboardComponent },
  { path: 'ajout', component: AddShoesComponent },
  { path: 'dashboard/chaussure/edit/:id', component: EditShoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
