import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:`<button (click)="increaseby(1)">+1</button>
    <button (click)="increaseby(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>

    <h3>Counter: {{ counter }}</h3>`
  })
export class CounterComponent{
  counter:number=0
  increaseby(value:number):void{
    this.counter+=value;
  }
  resetCounter():void{
    this.counter=0;
  }

}
