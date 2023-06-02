import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { LoginComponent } from './Login/login.component';
import { SignupComponent } from './Signup/signup.component';
import { HomepageComponent } from './Homepage/homepage.component';
import { ProductsComponent } from './Products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AppComponent, HomepageComponent, NavbarComponent, LoginComponent, SignupComponent, ProductsComponent ],
  imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
