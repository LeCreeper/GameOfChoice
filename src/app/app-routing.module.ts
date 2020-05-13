import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GamePageComponent } from './game-page/game-page.component';
import { TitleScreenComponent } from './title-screen/title-screen.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'gamePage', component: GamePageComponent },
  { path: 'titleScreen', component: TitleScreenComponent },
  { path: '', component: TitleScreenComponent, pathMatch: 'full' },
  { path: '**', component: TitleScreenComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
