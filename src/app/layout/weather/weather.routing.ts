import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view';
import { ViewAllComponent } from './view-all';

const routes: Routes = [
    { path: 'view', component: ViewComponent },
    { path: 'all', component: ViewAllComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeatherRoutingModule { }