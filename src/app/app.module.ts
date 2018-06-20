import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { CustomerService } from './customer.service';
import { CompaniesService } from './companies.service';
import { CutomersViewComponent } from './cutomers-view/cutomers-view.component';
import { DialogComponent } from './dialog/dialog.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CompaniesviewComponent } from './companiesview/companiesview.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';


@NgModule({
  declarations: [
    AppComponent,
    CutomersViewComponent,
    DialogComponent,
    AddcustomerComponent,
    CompaniesviewComponent,
    AddcompanyComponent,
  
    
      
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatSelectModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    MatToolbarModule,
    AppRoutingModule
    

 ],
  providers: [CustomerService, CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
