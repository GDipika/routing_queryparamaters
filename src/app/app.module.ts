import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes:Routes=[
  {path:'',component:HomeComponent,data:{page:1,search:'leela'}},
  //dynamic data (id and name)
{path:'user',component:UserComponent,
children:[ {path:':id/:name',component:UsersComponent}],
},
{path:'categories',component:CategoriesComponent,

}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CategoriesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
