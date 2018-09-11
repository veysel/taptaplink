import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { Error404Component } from './Error/Error404/error.404.component';
import { Error500Component } from './Error/Error500/error.500.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent }
        ]
    },
    {
        path: 'error',
        children: [
            { path: '', redirectTo: '/error/404', pathMatch: 'full' },
            { path: '404', component: Error404Component },
            { path: '500', component: Error500Component }
        ]
    },
    { path: '**', redirectTo: 'error/404' }
];