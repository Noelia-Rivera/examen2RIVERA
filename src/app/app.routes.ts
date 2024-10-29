import { Routes } from '@angular/router';
import { CarreraComponent } from './componentes/carrera/carrera.component';
import { FacultadComponent } from './componentes/facultad/facultad.component';

export const routes: Routes = [
    {
        path: '',
        component: CarreraComponent,
        title: 'carrera'
    },
    {
        path: 'facultad',
        component: FacultadComponent,
        title: 'facultad'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
