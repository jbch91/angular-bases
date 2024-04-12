import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public herosName:string[]=['Spiderman','Ironman','Hulk','Programador','Jhonatan'];
  public deleteHero?:string;
  removeLastHero():void{
    this.deleteHero= this.herosName.pop();
  }


}
