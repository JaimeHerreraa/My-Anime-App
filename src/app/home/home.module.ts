import { NgModule } from "@angular/core";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { TrendingAnimeListComponent } from "./trending-anime-list/trending-anime-list.component";
import { AnimeService } from "./services/anime.service";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AnimeEffect } from "./state/anime.effect";
import { homeReducer } from "./state/home.reducer";
import { CommonModule } from "@angular/common";
import { HomeContentComponent } from "./home-content/home-content.component";
import { HomeAnimeListComponent } from "./home-content/home-anime-list/home-anime-list.component";
import { AnimeCardComponent } from "./home-content/anime-card/anime-card.component";
import { MovieEffect } from "./state/movie.effect";
import { StringShorthenerPipe } from "./services/string-shorthener.pipe";

@NgModule({
    imports: [
        HttpClientModule,
        EffectsModule.forFeature([AnimeEffect, MovieEffect]),
        StoreModule.forFeature("home", homeReducer),
        CommonModule
    ],
    declarations: [
        HomeLayoutComponent,
        TrendingAnimeListComponent,
        HomeContentComponent,
        HomeAnimeListComponent,
        AnimeCardComponent,
        StringShorthenerPipe
    ],
    exports: [
        HomeLayoutComponent,
        AnimeCardComponent,
        StringShorthenerPipe
    ],
    providers: [
        AnimeService
    ]
})
export class HomeModule {}