import { Injectable } from "@angular/core";
import { AnimeService } from "../services/anime.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as HomeActions from "./home.actions";
import { map, mergeMap } from "rxjs";

@Injectable()
export class MovieEffect {

    constructor(private animeService: AnimeService, private actions$: Actions) {}
    loadAnimeList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.loadMovies),
            mergeMap(() => this.animeService.getMoviesList().pipe(
                map(movies => HomeActions.loadMoviesSuccess({ movies }))
            ))
        )
    })
}