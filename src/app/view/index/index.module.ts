import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [ IndexComponent ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    ButtonModule
  ]
})
export class IndexModule {

}
