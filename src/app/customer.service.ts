import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Subject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Customer } from './customerModel';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService{

  public getCommentsObservable: Observable<Comment[]>;
  private getCommentsSubject: Subject<Comment[]>;

  constructor(http: HttpClient) {
    super(http, 'customers_api')
 
    this.getCommentsSubject = new Subject<Comment[]>();
    this.getCommentsObservable = this.getCommentsSubject.asObservable();

  }

  getCustomerComments(id) {
    this.http.get<Array<Comment>>('/comments_api/' + id).subscribe((data) => {
      console.log(data);
      this.getCommentsSubject.next(data);
    })
  }

  addNewComment(comment, id) {
    this.http.post<Comment[]>('/comments_api/addcomment', { text: comment, customer_id: id}).subscribe((allComments) => {
      this.getCommentsSubject.next(allComments);
    })
  }



}








  // public customers: Array<Customer> = Array<Customer>();
  // public getCustomersObservable: Observable<Customer[]>;
  // private getCustomersSubject: Subject<Customer[]>;




   // this.getCustomersSubject = new Subject<Customer[]>();
    // this.getCustomersObservable = this.getCustomersSubject.asObservable();

  // addNewCustomer(customer: Customer): void {
  //   this.http.post<Customer>('/customers_api/addcustomer', { newCustomer: customer }).subscribe(() => {
  //     this.getAllCustomers();
  //   })
  // }

  // deleteCustomer(id): void {
  //   this.http.delete<Customer>('/customers_api/delete/' + id).subscribe(data => {
  //     this.getAllCustomers();
  //   })
  // }

//   updateCustomerData(details: Customer): void {
//     this.http.put<Customer>('./customers_api/updatecustomer', { details }).subscribe(data => {
//       console.log('what is data?   ' + data);
//       this.getAllCustomers();
//     })
//   }
// }

  // getAllCustomers(): void {
  //   this.http.get<Array<Customer>>('/customers_api').subscribe((data) => {
  //     console.log(data);
  //     this.getCustomersSubject.next(data)
  //   })
  // }


