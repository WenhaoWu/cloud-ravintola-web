import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { DynamicComponentLoader } from '../../dynamic-component-loader/dynamic-component-loader.service';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    DynamicComponentLoaderModule.forChild(ShellComponent),
  ],
  declarations: [ShellComponent, HomeComponent]
})
export class ClientModule { }
