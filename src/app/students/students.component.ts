import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public company:string="";

  public name:string = "";
  public marks:number = 0;
  public fee:number =0;

  public students:any = [
    {name:'aaaa', marks:100, fee:20000},
    {name:'bb', marks:70, fee:25000},
    {name:'ccc', marks:80, fee:30000},
    {name:'ddd', marks:90, fee:15000},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  register(){

    let student = {
      'name': this.name,
      'marks': this.marks,
      'fee': this.fee
    }

    this.students.push(student);

  }

  delete(i:number){
    this.students.splice(i,1);
  }

  total(){
    var totalFee = this.students.reduce((sum:any,student:any)=>sum+student.fee,0);
    alert(totalFee);
  }

  lowToHigh(){
    this.students = this.students.sort((a:any,b:any)=>a.marks-b.marks);
  }

  salutation(){
    this.students = this.students.map((student:any)=>{
      student.name = "Mr. " + student.name;
      return student;
    })
  }

}
