import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';
import { UpdatestudentComponent } from '../updatestudent/updatestudent.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent {
  getstudent: any;

  constructor(public so:StudentService,private router: Router,private dialog: MatDialog) {
    this.so.getstudent().subscribe((data:any)=>{
      console.log("get return data",data);
      this.getstudent=data
    })

  }

  



  
  openEditDialog(studentId: number) {
    console.log("EDIT");
    console.log(studentId);
    const dialogRef = this.dialog.open(UpdatestudentComponent, {
        width: '600px', // Set width as needed
        data: { id: studentId } // Pass necessary data to the modal if required
    });

    dialogRef.afterClosed().subscribe(result => {
        // Handle actions after dialog is closed if needed
    });
}



    
  

 


  deleteStudent(studentdata: any) {
    console.log("Delete");
    const studentId = studentdata.student_id;
    this.so.deleteStudent(studentId).subscribe(
      (response) => {
        console.log('Delete successful:', response);
        alert("Deleted successfully");
        window.location.reload();
        
      },
      (error) => {
        console.error('Error deleting data:', error);
      }
    );
  }

}
