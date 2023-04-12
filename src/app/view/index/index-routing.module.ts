import { IndexComponent } from './index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'my-app/index', pathMatch: 'full' },
  {
    path: 'my-app/index',
    component: IndexComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class IndexRoutingModule { }
