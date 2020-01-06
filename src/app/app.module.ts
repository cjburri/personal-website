import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticMenuComponent } from './static-menu/static-menu.component';
import { TagsComponent } from './static-menu/sub-components/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticMenuComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
