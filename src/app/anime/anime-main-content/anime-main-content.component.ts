import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, currentAnimeSelector } from "../state/anime.reducer";
import { IAnime } from "src/app/home/entities/IAnime";

@Component({
    selector: "anime-main-content",
    templateUrl: "./anime-main-content.component.html",
    styleUrls: ["./anime-main-content.component.css"]
})
export class AnimeMainContentComponent implements OnInit {

    anime?: IAnime;
    score: number = 0;

    constructor(private store: Store<AppState>) {}
    ngOnInit(): void {
        this.store.select(currentAnimeSelector).subscribe(anime => {
            this.anime = anime;
            this.score = anime.score
        })
    }

}