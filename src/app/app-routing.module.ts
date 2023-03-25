import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./view/index/index.module').then((m) => m.IndexModule),
  },
  {
    path: 'questionnaire',
    loadChildren: () =>
      import('./view/questionnaire/questionnaire.module').then((m) => m.QuestionnaireModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
