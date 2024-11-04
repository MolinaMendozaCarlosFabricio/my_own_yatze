import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YatzeViewComponent } from './yatze-view/yatze-view.component';
import { YatzeDadosComponent } from './yatze-dados/yatze-dados.component';



@NgModule({
  declarations: [
    YatzeViewComponent,
    YatzeDadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YatzeViewComponent
  ]
})
export class YatzeModule { }
