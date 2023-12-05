import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LiberaryserviceService } from 'src/app/liberaryservice.service';
import {Book} from 'src/app/Book';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{
  book:Book[]=[];
 st:Student=new Student();
 constructor(private serv:LiberaryserviceService,private router:Router){}
 ngOnInit(): void {
  this.getCourses();
 }

getCourses()
{
  this.serv.getAllBook().subscribe(data=>{
    this.book=data
  });
  // for (let index = 0; index < this.book.length; index++) {
  //   console.log(this.book[index].bname);
    
  // }
  
}

 postStudent()
 {
 
   this.serv.postStudent(this.st).subscribe(() => {
           this.router.navigate(['/students'])
           }
          
   );
     
 }

 

}

