import { Component } from '@angular/core';
import { LiberaryserviceService } from 'src/app/liberaryservice.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  ss:Student[]=[];
  student:Student=new Student();

  displayedColumns: string[] = ['sid', 'sname', 'semail', 'scontact','sbook.bname','actions'];

  constructor(private serv:LiberaryserviceService)
  {}
  ngOnInit(): void {
    this.getAllStudents();
  }
 id:number=0;
getStudent(id:number){
  this.serv.getStudent(id).subscribe(data=>
    {
        this.student=data;

    });
    console.log(this.student);
}
  getAllStudents()
  {
    this.serv.getAllStudents().subscribe(data=>
      {
          this.ss=data;

      });
      console.log(this.ss);
  }



  openDeleteModal(id:number)
  {
    
    if(window.confirm("Do you want to delete this record?"))
    {
            this.serv.deleteStudent(id).subscribe(() => {
              this.getAllStudents();
           
            });
          }

  }
}
