import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// siempre exportar este modulo para poder utilizar las directivas

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";


@NgModule({

  declarations:[
    HeroComponent,
    ListComponent,
  ],
  exports:[
    HeroComponent,
    ListComponent,
  ],
  imports:[
    CommonModule
    // aca se imoporta el para directivas ngif,ngfor
  ]

})


export class HeroesModule{}
