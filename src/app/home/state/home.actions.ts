import { createAction, props } from "@ngrx/store";
import { IAnime } from "../entities/IAnime";

export const loadAnimes = createAction("[Home] load anime list");
export const loadAnimesSuccess = createAction("[Home] load anime list success", props<{ animes: IAnime[] }>());
export const loadAnimesError = createAction("[Home] load anime list error");

export const loadMovies = createAction("[Home] load movie list");
export const loadMoviesSuccess = createAction("[Home] load movie list success", props<{ movies: IAnime[] }>());
export const loadMoviesError = createAction("[Home] load movie list error");