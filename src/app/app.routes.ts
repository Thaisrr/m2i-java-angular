import { Routes } from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {BlocksComponent} from "./pages/blocks/blocks.component";
import {PipesComponent} from "./pages/pipes/pipes.component";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AddComponent} from "./pages/admin/add/add.component";
import {ParentComponent} from "./pages/parent/parent.component";
import {LifecycleComponent} from "./pages/lifecycle/lifecycle.component";
import {FormationsComponent} from "./pages/formations/formations.component";
import {RxjsComponent} from "./pages/rxjs/rxjs.component";
import {ObservablesComponent} from "./pages/rxjs/observables/observables.component";
import {SubjectsComponent} from "./pages/rxjs/subjects/subjects.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'blocks', component: BlocksComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'form', loadComponent: () => import('./pages/formulaire/formulaire.component').then(module => module.FormulaireComponent)},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'add', component: AddComponent}
   ]},
  {path: 'parent', component: ParentComponent},
  {path: 'life', component: LifecycleComponent},
  {path: 'formations', component: FormationsComponent},
  {path: 'rxjs', component: RxjsComponent, children: [
      {path: 'observables', component: ObservablesComponent},
      {path: 'subjects', component: SubjectsComponent},
    ]
  },
  {path: 'accueil', redirectTo: ''},
  {path: 'acceuil', redirectTo: ''},
  {path: '**', component: NotFoundComponent}
];
