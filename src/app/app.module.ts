import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MzButtonModule, MzInputModule, MzCardModule, MzNavbarModule, MzParallaxModule   } from 'ngx-materialize';
import { HomeComponent } from './components/home/home.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ParallaxComponent } from './components/parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonsComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzNavbarModule ,
    MzParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
