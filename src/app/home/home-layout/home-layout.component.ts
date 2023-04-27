import { Component, OnInit } from "@angular/core";
import * as HomeActions from "../state/home.actions";
import { Store } from "@ngrx/store";

@Component({
    selector: "home-layout",
    templateUrl: "./home-layout.component.html",
    styleUrls: ["./home-layout.component.css"]
})
export class HomeLayoutComponent implements OnInit {

    constructor(private store: Store) {}
    ngOnInit(): void {
        this.store.dispatch(HomeActions.loadAnimes());
        this.store.dispatch(HomeActions.loadMovies());
    }
}