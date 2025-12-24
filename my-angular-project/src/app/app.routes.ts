import { Routes } from '@angular/router';
import { Home} from './pages/home/home';
import { ThemeChanger } from './pages/theme-changer/theme-changer'

export const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: Home },
{ path: 'theme', component: ThemeChanger }

];
