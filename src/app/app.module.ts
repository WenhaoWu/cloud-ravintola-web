import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
    DynamicComponentLoaderModule,
    DynamicComponentManifest
} from './dynamic-component-loader/dynamic-component-loader.module';


// This array defines which "componentId" maps to which lazy-loaded module.
const manifests: DynamicComponentManifest[] = [
    {
        componentId:"client-2",
        path:'client-2-shell',
        loadChildren:'./dynamic-modules/client-2/client-2.module#Client2Module'

    },
    {
        componentId: 'test-resturant-shell',
        path: 'test-shell', // some globally-unique identifier, used internally by the router
        loadChildren:
            './dynamic-modules/test-resturant/test-resturant.module#TestResturantModule'
    },
    {
        componentId: 'client-shell',
        path: 'client-shell', //
        loadChildren: './dynamic-modules/client/client.module#ClientModule'
    },
    {
        componentId: 'fu-man-lou',
        path: 'fumanlou-shell',
        loadChildren: './dynamic-modules/fu-man-lou/fu-man-lou.module#FuManLouModule'
    }
];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DynamicComponentLoaderModule.forRoot(manifests)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
