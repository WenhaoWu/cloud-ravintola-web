import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { GalleryComponent } from './gallery/gallery.component';
import { TestResturantRoutingModule } from './test-resturant-routing.module';
import { Router } from '../../../../node_modules/@angular/router';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    TestResturantRoutingModule,
    DynamicComponentLoaderModule.forChild(ShellComponent),
  ],
  declarations: [HomeComponent, GalleryComponent, ShellComponent],
  entryComponents: [ShellComponent]
})
export class TestResturantModule { }
