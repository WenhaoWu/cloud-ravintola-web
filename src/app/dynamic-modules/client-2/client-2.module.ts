import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Client2RoutingModule } from './client-2-routing.module';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { DynamicComponentLoader } from '../../dynamic-component-loader/dynamic-component-loader.service';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

@NgModule({
  imports: [
    CommonModule,
    Client2RoutingModule,
    DynamicComponentLoaderModule.forChild(ShellComponent),
  ],
  declarations: [ShellComponent, HomeComponent]
})
export class Client2Module { }
