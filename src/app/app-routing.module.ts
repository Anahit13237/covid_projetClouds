import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';
import { SecurePagesGuard } from './secure-pages.guard';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path : "homepage", component: HomepageComponent},
  {path : "signin", component: SigninComponent,canActivate:[SecurePagesGuard]},
  /* the canactivate ADD the condition that a user can not get to page news if he has not signed in*/
  {path : "news", component: NewsComponent, canActivate:[AuthGuard]},
  {path : "", pathMatch:"full", redirectTo: "homepage"},
  {path : "**", redirectTo: "homepage"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
