import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AnimeActions from "./anime.actions";
import { map, mergeMap } from "rxjs";
import { AnimeService } from "src/app/home/services/anime.service";

@Injectable()
export class PaginationEffect {

    constructor(private animeService: AnimeService, private actions$: Actions) {}
    anime$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AnimeActions.episodeListPagination),
            mergeMap((payload) => this.animeService.getEpisodeListPagination(payload.animeId, payload.page).pipe(
                map(episodeList => AnimeActions.episodeListPaginationSuccess({ episodeList }))
            ))
        )
    })
}