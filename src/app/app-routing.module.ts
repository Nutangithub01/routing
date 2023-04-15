import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RoutingComponent } from './routing/routing.component';
import { UserComponent } from './user/user.component';
import { NopageComponent } from './nopage/nopage.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  {
    path:"news",
    component:NewsComponent
  },
  {
    path:"about",
    component:AboutComponent,
    children: [
      {path:"aboutme",component:AboutmeComponent},
      {path:"aboutcompany",component:AboutcompanyComponent}
    ]
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"",
    component:RoutingComponent
  },
  {
    path:"user/:id",
    component:UserComponent
  },
  {
    path:"**",
    component:NopageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
