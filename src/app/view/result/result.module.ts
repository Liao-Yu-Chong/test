import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultRoutingModule } from './result-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResultComponent } from './result.component';

@NgModule({
  declarations: [ResultComponent],
  imports: [CommonModule, ResultRoutingModule, SharedModule],
})
export class ResultModule {}
