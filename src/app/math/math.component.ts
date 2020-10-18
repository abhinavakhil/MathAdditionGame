import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {


  UserAnswer:string = "";
  Answer:number;
  RandomNum1:number = Math.floor(Math.random() * 10);
  RandomNum2:number = Math.floor(Math.random() * 10);

  TotalTime;
  StartTime = new Date().getSeconds();
  EndTime;
  AvgTime:number = 0;
  counter:number = 0;
  sum:number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  onSearchChange(value:string){
  this.UserAnswer = value;
  console.log(this.UserAnswer);

  this.Answer = (+this.RandomNum1 + +this.RandomNum2);

  if(this.Answer === +this.UserAnswer){

  (document.querySelector('.app-success') as HTMLElement).style.borderBottom="5px solid green";

     setInterval(()=>{
      (document.querySelector('.app-success ') as HTMLElement).style.borderBottom="5px solid #000000";
     },2000);


    // clear all fields
    (<HTMLInputElement>document.querySelector('#inputform')).value = " ";
    this.UserAnswer = "";

    this.RandomNum1 = Math.floor(Math.random() * 10);
    this.RandomNum2 = Math.floor(Math.random() * 10);


    // for Avgtime
    this.counter++;
    this.EndTime = new Date().getSeconds();
    this.TotalTime = this.EndTime - this.StartTime;
    console.log("totalTime",this.TotalTime);
    this.AvgTime = (this.TotalTime)/(this.counter);

  }else{

     (document.querySelector('.app-error') as HTMLElement).style.borderBottom="5px solid red";

     setInterval(()=>{
      (document.querySelector('.app-success ') as HTMLElement).style.borderBottom="5px solid #000000";
     },3000);

   }

  }
}
