import { Injectable } from "@angular/core";
import { AnimeService } from "../services/anime.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as HomeActions from "./home.actions";
import { map, mergeMap } from "rxjs";

@Injectable()
export class AnimeEffect {

    constructor(private animeService: AnimeService, private actions$: Actions) {}
    loadAnimeList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.loadAnimes),
            mergeMap(() => this.animeService.getAnimeList().pipe(
                map(animes => HomeActions.loadAnimesSuccess({ animes }))
            ))
        )
    })
}