import { RouterModule, Routes } from '@angular/router';

//En esta parte importo las clases ts de los componentes.
import { BodyComponent } from './components/body/body.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);