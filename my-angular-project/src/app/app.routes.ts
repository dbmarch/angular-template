import { Routes } from '@angular/router';
import { Home} from './pages/home/home';
import { ThemeChanger } from './pages/theme-changer/theme-changer';
import { RegisterUser } from './pages/register-user/register-user';
import { LoginUser } from './pages/login-user/login-user';
import { Fruit } from './pages/fruit/fruit';
import { Book } from './pages/book/book';

export const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: Home },
{ path: 'fruit', component: Fruit },
{ path: 'book', component: Book },
{ path: 'theme', component: ThemeChanger },

{ path: 'register', component: RegisterUser },
{ path: 'login',  component: LoginUser }

];
