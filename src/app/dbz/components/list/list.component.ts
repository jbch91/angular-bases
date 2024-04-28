import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Input()
  public characterList:Character[]=[{
    id:'fff',
    name: 'Trunks',
    power: 20000
  }];
  @Output()
   public onDeleteId:EventEmitter<string>=new EventEmitter();



   onDeleteCharacter(id?:string):void{
    if(!id){return;}
    //console.log(index)
    this.onDeleteId.emit(id);
  }
}
