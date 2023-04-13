import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '' },
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
  {
    path: 'result/:id',
    loadChildren: () =>
      import('./view/result/result.module').then((m) => m.ResultModule),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
