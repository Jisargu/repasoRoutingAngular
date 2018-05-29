import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {NoticiasComponent} from '../app/noticias/noticias.component';
import {ContactoComponent} from '../app/contacto/contacto.component';
/*import {Seccion4Component} from '../app/seccion4/seccion4.component';
import {Seccion5Component} from '../app/seccion5/seccion5.component';
import {Seccion6Component} from '../app/seccion6/seccion6.component';
import {Seccion7Component} from '../app/seccion7/seccion7.component';
import {Seccion8Component} from '../app/seccion8/seccion8.component';*/

const routes: Routes = [
  {
path: '',
component: HomeComponent
  },
  {
    path: 'noticias',
component: NoticiasComponent
  },
  {
    path: 'contacto',
component: ContactoComponent
  },
  /*{
    path: 'seccion4',
component: Seccion4Component
  },
  {
    path: 'seccion5',
component: Seccion5Component
  },
  {
    path: 'seccion6',
component: Seccion6Component
  },
  {
    path: 'seccion7',
component: Seccion7Component
  },
  {
    path: 'seccion8',
component: Seccion8Component
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
