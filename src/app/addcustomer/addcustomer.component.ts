import { Component, OnInit } from '@angular/core';
import { Customer } from '../customerModel';
import { CustomerService } from '../customer.service';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  public newCustomer: Customer = new Customer();
  public displayForm: boolean = false;
  public allCompanies : any;

  constructor(private customerService : CustomerService, private companiesService : CompaniesService) { }

  ngOnInit() {
    this.companiesService.getAllData();
    this.companiesService.getAllDataObservable.subscribe(data => {
      this.allCompanies = data;
      console.log(this.allCompanies);
    })
  }

  toggleForm(){

    this.displayForm === false? this.displayForm = true : this.displayForm = false;

  }

  submitCustomer(){
     this.customerService.addNewData(this.newCustomer);
    console.log(this.newCustomer)
    this.displayForm = false;
    this.newCustomer = new Customer();
  }

Cancel(){
this.displayForm = false;
this.newCustomer = new Customer();
  }


}
