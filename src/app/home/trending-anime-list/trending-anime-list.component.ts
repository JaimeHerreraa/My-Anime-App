import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.state";
import { moviesSelector } from "../state/home.reducer";
import { IAnime } from "../entities/IAnime";
import { Router } from "@angular/router";

@Component({
    selector: "trending-anime-list",
    templateUrl: "./trending-anime-list.component.html",
    styleUrls: ["./trending-anime-list.component.css"]
})
export class TrendingAnimeListComponent implements OnInit {

    movies!: IAnime[];

    constructor(private store: Store<State>, private router: Router) {}
    ngOnInit(): void {
        this.store.select(moviesSelector).subscribe(movies => {
            this.movies = movies;
        })
    }

    navigate(id: number):void {
        this.router.navigate([`anime/${id}`]);
    }
}