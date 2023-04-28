import { createAction, props } from "@ngrx/store";
import { IAnime } from "src/app/home/entities/IAnime";

export const getAnime = createAction("[Anime] get anime", props<{ id: number }>());
export const getAnimeSuccess = createAction("[Anime] get anime success", props<{ anime: IAnime }>());
export const getAnimeFailure = createAction("[Anime] get anime failure");