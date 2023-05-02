import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IAnime } from "src/app/home/entities/IAnime";
import * as AnimeActions from "./anime.actions";
import { State } from "src/app/app.state";
import { IEpisodeDetails, IEpisodeList } from "src/app/home/entities/IEpisode";
import { IError } from "../entities/IError";

export interface AppState extends State {
    anime: AnimeState;
}

interface AnimeState {
    anime: IAnime;
    loading: boolean;
    episodeList: IEpisodeList;
    episodeDetails: IEpisodeDetails;
    detailsLoading: boolean;
    error: IError;
}

const initialState: AnimeState = {
    anime: {} as IAnime,
    episodeList: {} as IEpisodeList,
    loading: true,
    episodeDetails: {} as IEpisodeDetails,
    detailsLoading: true,
    error: { status: 0, statusText: "", message: "", error: "" }
}

const animeSelector = createFeatureSelector<AnimeState>("anime");

export const currentAnimeSelector = createSelector(
    animeSelector,
    state => state.anime
)

export const loadingSelector = createSelector(
    animeSelector,
    state => state.loading
)

export const episodeListSelector = createSelector(
    animeSelector,
    state => state.episodeList
)

export const episodeDetailsSelector = createSelector(
    animeSelector,
    state => state.episodeDetails
)

export const detailsLoadingSelector = createSelector(
    animeSelector,
    state => state.detailsLoading
)

export const errorSelector = createSelector(
    animeSelector,
    state => state.error
)

export const animeReducer = createReducer<AnimeState>(
    initialState,
    on(AnimeActions.getAnimeSuccess, (state, action): AnimeState => {
        return {
            ...state,
            anime: action.anime,
            loading: false
        }
    }),
    on(AnimeActions.resetAnimeState, (): AnimeState => {
        return {
            ...initialState
        }
    }),
    on(AnimeActions.getEpisodeListSuccess, (state, action): AnimeState => {
        return {
            ...state,
            episodeList: action.episodeList
        }
    }),
    on(AnimeActions.getEpisodeDetails, (state): AnimeState => {
        return {
            ...state,
            detailsLoading: true,
            error: { status: 0, statusText: "", message: "", error: "" }
        }
    }),
    on(AnimeActions.getEpisodeDetailsSuccess, (state, action): AnimeState => {
        return {
            ...state,
            episodeDetails: action.episodeDetails,
            detailsLoading: false
        }
    }),
    on(AnimeActions.episodeListPaginationSuccess, (state, action): AnimeState => {
        return {
            ...state,
            episodeList: { pagination: action.episodeList.pagination, data: [...state.episodeList.data, ...action.episodeList.data] }
        }
    }),
    on(AnimeActions.getEpisodeDetailsFailure, (state, action): AnimeState => {
        return {
            ...state,
            error: action.error,
            detailsLoading: false
        }
    })
)