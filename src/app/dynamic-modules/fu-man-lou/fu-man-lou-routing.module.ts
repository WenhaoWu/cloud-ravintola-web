import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FuManLouRoutingModule { }

