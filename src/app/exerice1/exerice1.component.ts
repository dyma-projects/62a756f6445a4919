import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerice1',
  templateUrl: './exerice1.component.html',
  styleUrls: ['./exerice1.component.css']
})
export class Exerice1Component implements OnInit {
  public nom:string = "";
  public color: string = "red";
 public changeColor(color): void{
  this.color = color;
 }

  constructor() { }

  ngOnInit(): void {
  }


}
