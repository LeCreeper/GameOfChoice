import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { AboutComponent } from './about/about.component';
import { GamePageComponent } from './game-page/game-page.component';
import { SimpleService } from './simple.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleScreenComponent,
    AboutComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SimpleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
