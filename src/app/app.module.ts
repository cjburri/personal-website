import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticMenuComponent } from './static-menu/static-menu.component';
import { TagsComponent } from './static-menu/sub-components/tags/tags.component';
import { MenuComponent } from './static-menu/sub-components/menu/menu.component';
import { PersonalComponent } from './static-menu/sub-components/personal/personal.component';
import { FooterComponent } from './static-menu/sub-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticMenuComponent,
    TagsComponent,
    MenuComponent,
    PersonalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
