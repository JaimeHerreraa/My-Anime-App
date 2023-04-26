import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IAnime } from "../entities/IAnime";
import * as HomeActions from "./home.actions";

export interface HomeState {
    animes: IAnime[];
}

const initialState: HomeState = {
    animes: []
}

const homeSelector = createFeatureSelector<HomeState>("home");

export const animesSelector = createSelector(
    homeSelector,
    state => state.animes
)

export const homeReducer = createReducer<HomeState>(
    initialState,
    on(HomeActions.loadAnimesSuccess, (state, action): HomeState => {
        return {
            ...state,
            animes: action.animes
        }
    })
)