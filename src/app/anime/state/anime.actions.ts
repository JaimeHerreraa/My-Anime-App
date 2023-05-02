import { createAction, props } from "@ngrx/store";
import { IAnime } from "src/app/home/entities/IAnime";
import { IEpisodeDetails, IEpisodeList } from "src/app/home/entities/IEpisode";
import { IError } from "../entities/IError";

export const getAnime = createAction("[Anime] get anime", props<{ id: number }>());
export const getAnimeSuccess = createAction("[Anime] get anime success", props<{ anime: IAnime }>());
export const getAnimeFailure = createAction("[Anime] get anime failure");

export const getEpisodeList = createAction("[Anime] get anime episode list", props<{ id: number }>());
export const getEpisodeListSuccess = createAction("[Anime] get anime episode list success", props<{ episodeList: IEpisodeList }>());
export const getEpisodeListFailure = createAction("[Anime] get anime episode list failure");

export const getEpisodeDetails = createAction("[Anime] get anime episode detail", props<{ animeId: number, episodeId: number }>());
export const getEpisodeDetailsSuccess = createAction("[Anime] get anime episode detail success", props<{ episodeDetails: IEpisodeDetails }>());
export const getEpisodeDetailsFailure = createAction("[Anime] get anime episode detail failure", props<{ error: IError }>());

export const episodeListPagination = createAction("[Anime] get anime episode list pagination", props<{ animeId: number, page:number }>())
export const episodeListPaginationSuccess = createAction("[Anime] get anime episode list pagination success", props<{ episodeList: IEpisodeList }>());

export const resetAnimeState = createAction("[Anime] reset anime state");