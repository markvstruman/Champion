import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AchalasiaComponent } from './achalasia/achalasia.component';

const routes: Routes = [
  { path: 'home',
    title: 'Home Page',
    component: HomeComponent},
  {
    path: 'achalasia',
    title: 'Achalasia',
    component: AchalasiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
