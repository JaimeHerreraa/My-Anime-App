import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.state";
import { animesSelector } from "../state/home.reducer";
import { IAnime } from "../entities/IAnime";

@Component({
    selector: "trending-anime-list",
    templateUrl: "./trending-anime-list.component.html",
    styleUrls: ["./trending-anime-list.component.css"]
})
export class TrendingAnimeListComponent implements OnInit {

    movies!: IAnime[];

    constructor(private store: Store<State>) {}

    ngOnInit(): void {
        this.store.select(animesSelector).subscribe(animes => {
            this.movies = animes.filter(anime => anime.type.toLowerCase() === "movie");
        })
    }
}