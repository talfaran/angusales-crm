import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Observable, Subject } from 'rxjs';
import { MatDialog, MatDialogConfig, MatTableDataSource } from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Company } from '../companyModel';


@Component({
  selector: 'app-companiesview',
  templateUrl: './companiesview.component.html',
  styleUrls: ['./companiesview.component.css']
})
export class CompaniesviewComponent implements OnInit {

  displayedColumns = ['id', 'name', 'adress', 'country', 'actions'];
  dataSource;
  companyDataToUpdate: Company;

  constructor(private companiesService : CompaniesService) {
    
  
   }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.companiesService.getAllData();
    this.companiesService.getAllDataObservable.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
    })
  }

}
