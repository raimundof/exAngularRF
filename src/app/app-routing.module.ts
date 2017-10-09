import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Compt6Component } from './content/compt6/compt6.component';
import { Compt9Component } from './content/compt9/compt9.component';
import { Compt7Component } from './content/compt7/compt7.component';

const routes: Routes = [
  {
    path: '',
    component : Compt6Component
  },

  {
    path: 'compt9',
    component: Compt9Component,
  },

  {
    path: 'compt7',
    component: Compt7Component,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
