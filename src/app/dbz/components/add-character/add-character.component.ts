import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // para poderlo utilziar en todo lado se tien que poner el decorador output
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
// sintanxis definida

  public character:Character={
    name: '',
    power: 0
  };
  public emitCharacter(){
    if(this.character.name.length===0){return;}
    this.onNewCharacter.emit({...this.character});

    this.character.name='';
    this.character.power=0;
  }

}
