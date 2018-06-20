import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CutomersViewComponent } from './cutomers-view/cutomers-view.component';
import { CompaniesviewComponent } from './companiesview/companiesview.component';

const routes: Routes = [
  { path: '', component: CutomersViewComponent},
  { path: 'companies', component: CompaniesviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
