import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { ReferencesComponent } from './references/references.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FormsComponent } from './forms/forms.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TutorialsComponent,
    ReferencesComponent,
    ExercisesComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
