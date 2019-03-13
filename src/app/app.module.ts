import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { TestingComponent } from './Views/testing/testing.component';
import { GameComponent } from './Views/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestingComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
                          { path: 'home', component: HomeComponent },
                          { path: 'duck', component: TestingComponent },
                          { path: 'game', component: GameComponent },
                          { path: '', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
