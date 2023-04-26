import { NgModule } from "@angular/core";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { TrendingAnimeListComponent } from "./trending-anime-list/trending-anime-list.component";

@NgModule({
    declarations: [
        HomeLayoutComponent,
        TrendingAnimeListComponent
    ],
    exports: [
        HomeLayoutComponent
    ]
})
export class HomeModule {}