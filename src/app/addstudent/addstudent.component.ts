import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { StudentService } from '../service/student.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';



@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {

  options: string[] = ['ECE', 'EEE', 'MECH', 'CIVIL', 'CSE','EIE'];
  selectedOptions: string[] = [];

  myForm: FormGroup;

  userFormData: any;
  selectedTabIndex = 0;
  studentdetailsForm: FormGroup;
  studentdetailsFormData: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private fb: FormBuilder,public so:StudentService, private _snackBar: MatSnackBar,public route:Router) {

    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      
      dob: ['', Validators.required],
      gender: ['', Validators.required],
     
      email: ['', Validators.required],
      phone: ['', Validators.required],
      courses:[''],
    });

    this.studentdetailsForm = this.fb.group({
    
      selectedOptions: [[], Validators.required],
    });
  }

  moveToNextTab1() {
    if (this.myForm.valid) {
      if (this.selectedTabIndex < 2) {
        this.selectedTabIndex++;

      }
    }
    this.userFormData = {
      firstName: this.myForm.get('firstName')?.value,
      lastName: this.myForm.get('lastName')?.value,
      address: this.myForm.get('address')?.value,
      phone: this.myForm.get('phone')?.value,
      dob: this.myForm.get('dob')?.value,
      gender: this.myForm.get('gender')?.value,
      email: this.myForm.get('email')?.value
    };
    
    console.log("FORM 1: ", this.userFormData);

  }

  moveToPreviousTab() {
    if (this.selectedTabIndex > 0) {
      this.selectedTabIndex--;
    }
  }

  moveToNextTab2() {
    if (this.studentdetailsForm.valid) {
      this.studentdetailsFormData = this.studentdetailsForm.value;
  
   
      this.selectedTabIndex++;
    }
     else {
       this.studentdetailsForm.markAllAsTouched();
   }
  }

  submitform(){
    console.log("tab1",this.myForm.value)
    console.log("tab2",this.studentdetailsForm.value)
    this.myForm.value.courses=this.studentdetailsForm.value.selectedOptions;
    console.log("tab3",this.myForm.value)

    this.so.addstudent(this.myForm.value).subscribe((data:any)=>{
      console.log("return data",data);
      this.openSnackBar();
    })

  }

  openSnackBar() {
    this._snackBar.open('Added Successfully!!', 'ok', {
    });
    this.route.navigate(['/viewstudent'])
  }


}


