import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IAnime } from "src/app/home/entities/IAnime";
import * as AnimeActions from "./anime.actions";
import { State } from "src/app/app.state";

export interface AppState extends State {
    anime: AnimeState;
}

interface AnimeState {
    anime: IAnime;
    loading: boolean;
}

const initialState: AnimeState = {
    anime: {} as IAnime,
    loading: true
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

export const animeReducer = createReducer<AnimeState>(
    initialState,
    on(AnimeActions.getAnimeSuccess, (state, action): AnimeState => {
        return {
            ...state,
            anime: action.anime,
            loading: false
        }
    })
)