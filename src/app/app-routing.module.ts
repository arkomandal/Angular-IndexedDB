import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { COneComponent } from './c-one/c-one.component';
import { CTwoComponent } from './c-two/c-two.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'c-one',
    component: COneComponent,
  },
  {
    path: 'c-two',
    component: CTwoComponent,
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
