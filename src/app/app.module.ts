import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponent } from './routing/routing.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { NopageComponent } from './nopage/nopage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    NewsComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    NopageComponent,
    AboutmeComponent,
    AboutcompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
