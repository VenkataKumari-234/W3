import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReferencesComponent } from './references/references.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FormsComponent } from './forms/forms.component';
const routes: Routes = [
  { path:'home',component: HomeComponent },
  { path: 'references',component: ReferencesComponent },
  { path: 'tutorials',component: TutorialsComponent },
  { path: 'exercises',component: ExercisesComponent },
  { path: 'forms', component: FormsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
