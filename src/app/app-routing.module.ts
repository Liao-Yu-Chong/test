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
    path: 'my-app/questionnaire',
    loadChildren: () =>
      import('./view/questionnaire/questionnaire.module').then((m) => m.QuestionnaireModule),
  },
  {
    path: 'my-app/result/:id',
    loadChildren: () =>
      import('./view/result/result.module').then((m) => m.ResultModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
