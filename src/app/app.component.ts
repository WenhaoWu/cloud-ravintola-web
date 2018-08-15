import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';

import { DynamicComponentLoader } from './dynamic-component-loader/dynamic-component-loader.service';
import { ShellComponent as testShell } from './dynamic-modules/test-resturant/shell/shell.component';
import { ShellComponent as clientShell } from './dynamic-modules/client/shell/shell.component';
import { ShellComponent as client2shell} from './dynamic-modules/client-2/shell/shell.component';
import { ShellComponent as fumanlou } from './dynamic-modules/fu-man-lou/shell/shell.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    @ViewChild('outlet', { read: ViewContainerRef })
    outlet: ViewContainerRef;

    constructor(private dynamicComponentLoader: DynamicComponentLoader) {}

    ngOnInit() {
        const host = window.location.hostname;

        let factory$;

        if (host === 'localhost') {
            factory$ = this.dynamicComponentLoader.getComponentFactory<clientShell>(
                'client-shell'
            );
        } else {
            factory$ = this.dynamicComponentLoader.getComponentFactory<testShell>(
                'test-resturant-shell'
            );
        }

        console.log(host);

        factory$.subscribe(
            componentFactory => {
                const ref = this.outlet.createComponent(componentFactory);
                ref.changeDetectorRef.detectChanges();
            },
            error => {
                console.warn(error);
            }
        );
    }
}
