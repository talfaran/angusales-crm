import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
// import { MatPaginator, MatSort } from '@angular/material';
// import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Customer } from '../customerModel';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompaniesService } from '../companies.service';
import { Company } from '../companyModel';

@Component({
  selector: 'app-cutomers-view',
  templateUrl: './cutomers-view.component.html',
  styleUrls: ['./cutomers-view.component.css']
})
export class CutomersViewComponent implements OnInit {

  constructor(private customerService: CustomerService,private companyService : CompaniesService, private dialog: MatDialog) { }

  displayedColumns = ['id', 'firstname', 'lastname', 'company', 'actions'];
  dataSource;
  customerDataToUpdate: Customer;
  allCompnaies : any;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.customerService.getAllData();
    this.customerService.getAllDataObservable.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
   
    })
  }

  deleteCustomer(element) {
    this.customerService.deleteCustomer(element.id);;
  }

  updateCustomer(dataToUpdate) {
    this.customerService.updateData(dataToUpdate)
  }

  //------------dialog related functions----------//

  openDialog(element, condition) {
    console.log(condition)
    var fullData: Customer = new Customer();
    for (let index = 0; index < this.dataSource.data.length; index++) {
      if(element.id == this.dataSource.data[index].id) { 
        fullData = this.dataSource.data[index] 
        break;
      }
      
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      condition: condition,
      fullCustomerData: fullData,
      id: element.id,
      firstName: element.FirstName,
      lastName: element.LastName
    };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        this.customerDataToUpdate = data;
        if (data != undefined) this.updateCustomer(data)

      }
    );
  }

}






