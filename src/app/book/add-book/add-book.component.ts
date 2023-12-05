import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Book';
import { LiberaryserviceService } from 'src/app/liberaryservice.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{
 bb:Book=new Book();
 constructor(private serv:LiberaryserviceService,private router:Router)
 {}
 ngOnInit(): void {
  this.postData();
 }

 postData()
 {
  // this.Course.Course_name=this.addCourseForm.controls.Course_name.value;
     
   this.serv.postBook(this.bb).subscribe(() => {
    console.log("Name"+this.bb.bname+"AuName"+this.bb.bauthorname+"Price"+this.bb.bprice);   
    this.router.navigate(['/books'])
           }
          
   );
     
 }

 
}
