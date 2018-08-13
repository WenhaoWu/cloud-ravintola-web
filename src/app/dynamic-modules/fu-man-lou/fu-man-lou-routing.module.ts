import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../client/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FuManLouRoutingModule { }

export const enum ClientRoutes {
  home = "home",
}

const routes: Routes = [
  {
    path:ClientRoutes.home,
    component:HomeComponent
  },
  {
    path:"*",
    redirectTo:ClientRoutes.home
  },
  {
    path:"**",
    redirectTo:ClientRoutes.home
  }
];
