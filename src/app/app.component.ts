import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';

import { DynamicComponentLoader } from './dynamic-component-loader/dynamic-component-loader.service';
import { HomeComponent } from './dynamic-modules/test-resturant/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  @ViewChild('outlet', {read: ViewContainerRef}) outlet: ViewContainerRef;

  constructor(
    private dynamicComponentLoader: DynamicComponentLoader,
  ) { }

  ngOnInit() {

    const host = window.location.hostname;

    let factory$;

    if (host === 'localhost'){
      factory$ = this.dynamicComponentLoader.getComponentFactory<HomeComponent>('test-resturant-shell');
    }
    else {
      factory$ = this.dynamicComponentLoader.getComponentFactory<HomeComponent>('test-resturant-shell');
    }

    console.log(host)

    factory$
    .subscribe(componentFactory => {
      const ref = this.outlet.createComponent(componentFactory);
      ref.changeDetectorRef.detectChanges();
    }, error => {
      console.warn(error);
    });
  }
}