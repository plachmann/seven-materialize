import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ParallaxComponent } from './components/parallax/parallax.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'parallax',
    component: ParallaxComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
