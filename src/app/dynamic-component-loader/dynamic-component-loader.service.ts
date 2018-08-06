import {ComponentFactory, Inject, Injectable, Injector, NgModuleFactoryLoader} from '@angular/core';

import {DYNAMIC_COMPONENT, DYNAMIC_COMPONENT_MANIFESTS, DynamicComponentManifest} from './dynamic-component-manifest';
import {throwError, Observable, from} from '../../../node_modules/rxjs';

@Injectable()
export class DynamicComponentLoader {

  constructor(
    @Inject(DYNAMIC_COMPONENT_MANIFESTS) private manifests : DynamicComponentManifest[], 
    private loader : NgModuleFactoryLoader, 
    private injector : Injector) {}

  /** Retrieve a ComponentFactory, based on the specified componentId (defined in the DynamicComponentManifest array). */
  getComponentFactory < T > (componentId : string, injector?: Injector) : Observable < ComponentFactory < T >> {
    const manifest = this
      .manifests
      .find(m => m.componentId === componentId);
    
    if (!manifest) {
      return throwError(`DynamicComponentLoader: Unknown componentId "${componentId}"`);
    }

    const p = this
      .loader
      .load(manifest.loadChildren)
      .then(ngModuleFactory => {
        const moduleRef = ngModuleFactory.create(injector || this.injector);
        const dynamicComponentType = moduleRef
          .injector
          .get(DYNAMIC_COMPONENT);
        if (!dynamicComponentType) {
          throw new Error(`DynamicComponentLoader: Dynamic module for componentId "${componentId}" does not contain DYNAMIC_COMPONENT as a provider.`,);
        }

        return moduleRef.componentFactoryResolver.resolveComponentFactory < T > (dynamicComponentType);
      });

    return from(p);
  }
}