import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GalleryComponent } from "./gallery/gallery.component";

export const enum TestRoutes {
    home = "home",
    gallary = "gallary"
}

const routes: Routes = [
    {
        path: TestRoutes.home,
        component: HomeComponent
    },
    {
        path: TestRoutes.gallary,
        component: GalleryComponent
    },
    {
        path: "*",
        redirectTo: TestRoutes.home
    },
    {
        path: "**",
        redirectTo: TestRoutes.home
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TestResturantRoutingModule {}
