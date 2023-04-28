import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AnimeActions from "./anime.actions";
import { map, mergeMap } from "rxjs";
import { AnimeService } from "src/app/home/services/anime.service";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class AnimeEffect {

    constructor(private animeService: AnimeService, private actions$: Actions, private route: ActivatedRoute) {}
    anime$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AnimeActions.getAnime),
            mergeMap((payload) => this.animeService.getAnimeById(payload.id).pipe(
                map(anime => AnimeActions.getAnimeSuccess({ anime }))
            ))
        )
    })
}