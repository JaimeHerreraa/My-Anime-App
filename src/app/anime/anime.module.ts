import { NgModule } from "@angular/core";
import { AnimeLayoutComponent } from "./anime-layout/anime-layout.component";
import { AnimeAsideContentComponent } from "./anime-aside-content/anime-aside-content.component";
import { HomeModule } from "../home/home.module";
import { StoreModule } from "@ngrx/store";
import { animeReducer } from "./state/anime.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AnimeEffect } from "./state/anime.effect";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        HomeModule,
        StoreModule.forFeature("anime", animeReducer),
        EffectsModule.forFeature([AnimeEffect]),
        SharedModule
    ],
    declarations: [
        AnimeLayoutComponent,
        AnimeAsideContentComponent
    ],
    exports: [
        AnimeLayoutComponent
    ]
})
export class AnimeModule {}