import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { TestingComponent } from './Views/testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
                          { path: 'home', component: HomeComponent },
                          { path: 'duck', component: TestingComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
