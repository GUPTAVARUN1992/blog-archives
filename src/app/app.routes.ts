import { Routes } from '@angular/router';
import { Archive } from './archive/archive';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
export const routes: Routes = [
    {
        path: "archive/:year/:month",
        component: Archive
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "**",
        component: NotFound
    }
];
