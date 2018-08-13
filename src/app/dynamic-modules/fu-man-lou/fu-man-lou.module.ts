import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuManLouRoutingModule } from './fu-man-lou-routing.module';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

@NgModule({
  imports: [
    CommonModule,
    FuManLouRoutingModule,
    DynamicComponentLoaderModule.forChild(ShellComponent),
  ],
  declarations: [ShellComponent, HomeComponent]
})
export class FuManLouModule { }
