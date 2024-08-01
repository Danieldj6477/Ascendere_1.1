import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { InduccionComponent} from './induccion/induccion.component';
import { InduccionUnidadesComponent} from './induccion-unidades/induccion-unidades.component';
import { IAComponent } from './ia/ia.component';
import { IaUnidadesComponent } from './ia-unidades/ia-unidades.component';
import { LoginComponent } from './login/login.component'; 

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'courselist', component: CourseListComponent },
  { path: 'induccion', component: InduccionComponent },
  { path: 'induccion/unidades', component: InduccionUnidadesComponent },
  { path: 'ia', component: IAComponent },
  { path: 'ia/unidades', component: IaUnidadesComponent },
  { path: 'login', component: LoginComponent },
  
];

