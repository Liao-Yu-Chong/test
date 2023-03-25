import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionnaireComponent } from './questionnaire.component';

@NgModule({
  declarations: [QuestionnaireComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    SharedModule
  ],
})
export class QuestionnaireModule {}
