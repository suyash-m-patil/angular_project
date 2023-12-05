import { Component } from '@angular/core';
import {  LiberaryserviceService } from 'src/app/liberaryservice.service';
import { Book} from 'src/app/Book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {
  book:Book[]=[];
  b:Book=new Book();
  displayedColumns1: string[] = ['bid','bname','bbookauthor','bprice','actions'];

  constructor(private serv:LiberaryserviceService)
  {}
  
 
  ngOnInit(): void {
    this.getAllBooks();
  }
 id:number=0;
  getBook(id:number){
    this.serv.getBook(id).subscribe(data=>
      {
          this.b=data;
  
      });
      console.log(this.b);
  }
  getAllBooks()
  {

    this.serv.getAllBook().subscribe((data)=>
      {
          this.book=data;

      });
      console.log(this.book)
  }



  openDeleteModal(id:number)
  {
    
    if(window.confirm("Do you want to delete this record?"))
    {
            this.serv.deleteBook(id).subscribe(() => {
              this.getAllBooks();
              //this.router.navigate(['/']);
         
            });
          }

  }

}
