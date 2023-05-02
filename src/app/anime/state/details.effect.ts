import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AnimeActions from "./anime.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { AnimeService } from "src/app/home/services/anime.service";

@Injectable()
export class DetailEffect {

    constructor(private animeService: AnimeService, private actions$: Actions) {}
    anime$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AnimeActions.getEpisodeDetails),
            mergeMap((payload) => this.animeService.getEpisodeDetails(payload.animeId, payload.episodeId).pipe(
                map(episodeDetails => AnimeActions.getEpisodeDetailsSuccess({ episodeDetails })),
                catchError(error => of(AnimeActions.getEpisodeDetailsFailure({ error })))
            ))
        )
    })
}