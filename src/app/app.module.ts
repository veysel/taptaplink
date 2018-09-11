import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { Error404Component } from './Error/Error404/error.404.component';
import { Error500Component } from './Error/Error500/error.500.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Error404Component,
    Error500Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
