import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/shared/home/home.component';
//import { Name2Component } from './';
//import { Name3Component } from './';
//import { Name4Component } from './';
//import { PageNotFoundComponent } from './';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }//,
   // { path: 'path2', component: Name2Component },
   // { path: 'path3', component: Name3Component },
    //{ path: 'path4', component: Name4Component },
    //{ path: '**', component: PageNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});