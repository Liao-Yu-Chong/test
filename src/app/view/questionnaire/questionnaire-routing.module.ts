import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire.component';

const routes: Routes = [
  { path: 'my-app/questionnaire', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: QuestionnaireComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnaireRoutingModule {}
