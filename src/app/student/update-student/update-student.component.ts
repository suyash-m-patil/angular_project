import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LiberaryserviceService } from 'src/app/liberaryservice.service';
import {Book } from 'src/app/Book';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  student:Student= {
    sid:0,
    sname: '',
    scontact: '',
    semail:'',
    sbook: {
      bid:0,
      bname:'',
      bauthorname:'',
      bprice:0
   },
    
  };

   id:number=0;
 
  constructor(
    private studentService: LiberaryserviceService,
    private router: Router,
    private route: ActivatedRoute
    ) {}
book:Book[]=[];
    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
         this.id = Number(param.get('id'));
        this.getById(this.id);
      });
      this.studentService.getAllBook().subscribe(data=>{
        this.book=data
      });
    }

    getById(id:number) {
      this.studentService.getStudent(id).subscribe((data) => {
        this.student=data;
      });
    }

  update(){
    this.studentService.updateStudent(this.student,this.id).subscribe(() => {
      this.router.navigate(['/students'])
    });
 
  }
}