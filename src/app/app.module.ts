import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookentryComponent } from './bookentry/bookentry.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookviewComponent } from './bookview/bookview.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"reg",
    component:RegComponent
  },
  {
    path:"bookentry",
    component:BookentryComponent
  },
  {
    path:"view",
    component:BookviewComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  },
  {
    path:"edit",
    component:EditComponent
  },
  {
    path:"issue",
    component:IssuebookComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
]


@NgModule({
  declarations: [
    AppComponent,
    BookentryComponent,
    RegComponent,
    LoginComponent,
    AdminloginComponent,
    BookviewComponent,
    IssuebookComponent,
    DeleteComponent,
    EditComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
