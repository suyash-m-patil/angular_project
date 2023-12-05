import { Book } from "./Book";

export class Student {
     sid:number=0;
    sname:string='';
    scontact:string='';
    semail:string='';
    sbook:Book={
        bid:0,
        bname:'',
        bauthorname:'',
        bprice:0
    }
}
