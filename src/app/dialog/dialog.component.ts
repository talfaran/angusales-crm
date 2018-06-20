import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Customer } from '../customerModel';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form: FormGroup;
  description: any;
  editDialog: boolean;
  dataRetrieved: Customer;
  commentText: string = "";
  customerComments : Comment[];

  constructor(
    private customerService : CustomerService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.description = data;
  }

  ngOnInit() {
    this.customerService.getCommentsObservable.subscribe(comments => {
      this.customerComments = comments;
    })
    this.customerService.getCustomerComments(this.description.id);
    this.customerService.getCommentsObservable.subscribe(data => {
      console.log(data)
      this.customerComments = data;
    })
    this.description.condition === 'true'? this.editDialog = false : this.editDialog = true;
    this.form = this.fb.group({
      id: this.description.id,
      firstName: this.description.firstName,
      lastName: this.description.lastName
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

  addComment() {
    console.log(this.commentText);
    this.customerService.addNewComment(this.commentText, this.description.id);

  } 
}
