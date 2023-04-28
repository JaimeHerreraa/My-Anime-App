import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IAnime } from "../entities/IAnime";
import * as HomeActions from "./home.actions";

export interface HomeState {
    animes: IAnime[];
    movies: IAnime[];
    currentSelection: IAnime;
    animesLoading: boolean;
    moviesLoading: boolean;
}

const initialState: HomeState = {
    animes: [],
    movies: [],
    currentSelection: {} as IAnime,
    animesLoading: true,
    moviesLoading: true
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

export const animesLoadingSelector = createSelector(
    homeSelector,
    state => state.animesLoading
)

export const moviesLoadingSelector = createSelector(
    homeSelector,
    state => state.moviesLoading
)

export const homeReducer = createReducer<HomeState>(
    initialState,
    on(HomeActions.loadAnimesSuccess, (state, action): HomeState => {
        return {
            ...state,
            animes: action.animes,
            animesLoading: false
        }
    }),
    on(HomeActions.loadMoviesSuccess, (state, action): HomeState => {
        return {
            ...state,
            movies: action.movies,
            moviesLoading: false
        }
    })
)