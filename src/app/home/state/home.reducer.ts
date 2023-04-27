import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IAnime } from "../entities/IAnime";
import * as HomeActions from "./home.actions";

export interface HomeState {
    animes: IAnime[];
    movies: IAnime[];
}

const initialState: HomeState = {
    animes: [],
    movies: []
}

const homeSelector = createFeatureSelector<HomeState>("home");

export const animesSelector = createSelector(
    homeSelector,
    state => state.animes
)

export const moviesSelector = createSelector(
    homeSelector,
    state => state.movies
)

export const homeReducer = createReducer<HomeState>(
    initialState,
    on(HomeActions.loadAnimesSuccess, (state, action): HomeState => {
        return {
            ...state,
            animes: action.animes
        }
    }),
    on(HomeActions.loadMoviesSuccess, (state, action): HomeState => {
        return {
            ...state,
            movies: action.movies
        }
    })
)