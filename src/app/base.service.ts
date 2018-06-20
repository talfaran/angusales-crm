import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public apiAdress: string;
  public getAllDataObservable: Observable<Array<Object>>;
  private getAllDataSubject: Subject<Array<Object>>;

  constructor(protected http: HttpClient, private name: string) { 
    this.getAllDataSubject = new Subject<Array<Object>>();
    this.getAllDataObservable = this.getAllDataSubject.asObservable();
    this.apiAdress = name;
  }

  getAllData(): void {
    this.http.get<Array<Object>>(`./${this.apiAdress}`).subscribe((data) => {
      console.log(data);
      this.getAllDataSubject.next(data)
    })
  }

  addNewData(freshData: any): void {
    this.http.post<any>(`./${this.apiAdress}`, { newData: freshData }).subscribe(() => {
      this.getAllData();
    })
  }

  updateData(details: any): void {
    this.http.put<any>(`./${this.apiAdress}`, { details }).subscribe(data => {
      this.getAllData();
    })
  }
  deleteCustomer(id): void {
    this.http.delete<any>(`./${this.apiAdress}/` + id).subscribe(data => {
      this.getAllData();
    })
  }
}
