import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuManLouRoutingModule } from './fu-man-lou-routing.module';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FuManLouRoutingModule
  ],
  declarations: [ShellComponent, HomeComponent]
})
export class FuManLouModule { }
