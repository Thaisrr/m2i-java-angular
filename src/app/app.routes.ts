import { Routes } from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {BlocksComponent} from "./pages/blocks/blocks.component";
import {PipesComponent} from "./pages/pipes/pipes.component";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AddComponent} from "./pages/admin/add/add.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'blocks', component: BlocksComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'form', loadComponent: () => import('./pages/formulaire/formulaire.component').then(module => module.FormulaireComponent)},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'add', component: AddComponent}
   ]},
  {path: 'accueil', redirectTo: ''},
  {path: 'acceuil', redirectTo: ''},
  {path: '**', component: NotFoundComponent}
];
