import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShortUrlComponent } from './short-url/short-url.component';

const routes: Routes = [
  {
    path : "",
    component : RegisterComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "home/shorturl",
    component : ShortUrlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
