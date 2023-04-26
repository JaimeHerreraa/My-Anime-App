import { NgModule } from "@angular/core";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { TrendingAnimeListComponent } from "./trending-anime-list/trending-anime-list.component";
import { AnimeService } from "./services/anime.service";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { HomeEffect } from "./state/home.effect";
import { homeReducer } from "./state/home.reducer";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        HttpClientModule,
        EffectsModule.forFeature([HomeEffect]),
        StoreModule.forFeature("home", homeReducer),
        CommonModule
    ],
    declarations: [
        HomeLayoutComponent,
        TrendingAnimeListComponent
    ],
    exports: [
        HomeLayoutComponent
    ],
    providers: [
        AnimeService
    ]
})
export class HomeModule {}