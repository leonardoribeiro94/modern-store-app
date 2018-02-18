//importado manualmente
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importando components
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from 'app/pages/signup-page/signup-page.component';
import { AuthService } from './services/auth.service';

//configurando rotas de navegação
const appRoutes: Routes = [
    { path: "", component: LoginPageComponent },
    { path: "home", component: HomePageComponent },
    { path: "signup", component: SignupPageComponent },
    { path: "cart", canActivate: [AuthService], component: CartPageComponent },
];

export const RoutingProviders: any = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);