import { createAction, props } from "@ngrx/store";
import { IAnime } from "../entities/IAnime";

export const loadAnimes = createAction("[Home] load anime list");
export const loadAnimesSuccess = createAction("[Home] load anime list success", props<{ animes: IAnime[] }>());
export const loadAnimesError = createAction("[Home] load anime list error");