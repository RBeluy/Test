import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListComponent} from './modules/movies-list/movies-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
