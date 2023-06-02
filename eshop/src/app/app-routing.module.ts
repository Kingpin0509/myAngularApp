import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { SignupComponent } from './Signup/signup.component';
import { HomepageComponent } from './Homepage/homepage.component';
import { ProductsComponent } from './Products/products.component';

const appRoutes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"login",
    component:LoginComponent
  },

  {
    path:"signup",
    component: SignupComponent
  },

  {
    path:":name",
    component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
