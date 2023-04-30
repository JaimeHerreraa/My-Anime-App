import { NgModule } from "@angular/core";
import { AnimeLayoutComponent } from "./anime-layout/anime-layout.component";
import { AnimeAsideContentComponent } from "./anime-aside-content/anime-aside-content.component";
import { HomeModule } from "../home/home.module";
import { StoreModule } from "@ngrx/store";
import { animeReducer } from "./state/anime.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AnimeEffect } from "./state/anime.effect";
import { SharedModule } from "../shared/shared.module";
import { AnimeMainContentComponent } from "./anime-main-content/anime-main-content.component";
import { StarsScoreComponent } from "./stars-score/stars-score.component";
import { AnimeEpisodeListComponent } from "./anime-main-content/anime-episode-list/anime-episode-list.component";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { EpisodeEffect } from "./state/episode.effect";
import { AnimeEpisodeDetailsComponent } from "./anime-episode-details/anime-episode-details.component";
import { DetailEffect } from "./state/details.effect";

@NgModule({
    imports: [
        HomeModule,
        StoreModule.forFeature("anime", animeReducer),
        EffectsModule.forFeature([AnimeEffect, EpisodeEffect, DetailEffect]),
        SharedModule,
        NgbAccordionModule
    ],
    declarations: [
        AnimeLayoutComponent,
        AnimeAsideContentComponent,
        AnimeMainContentComponent,
        StarsScoreComponent,
        AnimeEpisodeListComponent,
        AnimeEpisodeDetailsComponent
    ],
    exports: [
        AnimeLayoutComponent
    ]
})
export class AnimeModule {}