import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//adicionado reactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//rotas
import { Routing, RoutingProviders } from './app.routing'

//root
import { AppComponent } from './app.component';

//shared components
import { HeadBarComponent } from './components/shared/head-bar/head-bar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';

//components
import { ProductListComponent } from './components/product-list/product-list.component';

//pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { importType } from '@angular/compiler/src/output/output_ast';

//service
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';

//directives
import { NumberDirective } from 'app/directives/number.directive';

@NgModule({
  declarations: [
    NumberDirective,
    AppComponent,
    HeadBarComponent,
    SubMenuComponent,
    ProductListComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    CartPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule
  ],

  providers: [CartService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
