import { Component, Input, OnInit } from "@angular/core";
import { IAnime } from "src/app/home/entities/IAnime";
import { AppState, currentAnimeSelector } from "../state/anime.reducer";
import { Store } from "@ngrx/store";

@Component({
    selector: "anime-aside-content",
    templateUrl: "./anime-aside-content.component.html",
    styleUrls: ["./anime-aside-content.component.css"]
})
export class AnimeAsideContentComponent implements OnInit {

    anime?: IAnime;
    genres: string = "";
    licensors: string = "";
    producers: string = "";

    constructor(private store: Store) {}
    ngOnInit(): void {
        this.store.select(currentAnimeSelector).subscribe(anime => {
            this.anime = anime;
            this.convertToString();
        });
    }

    convertToString(): void {
        const genres: string[] = [];
        const producers: string[] = [];
        const licensors: string[] = [];

        this.anime?.genres.forEach(g => {
            genres.push(g.name);
        });
        this.anime?.producers.forEach(p => {
            producers.push(p.name);
        });
        this.anime?.licensors.forEach(l => {
            licensors.push(l.name);
        });

        this.genres = genres.join(",");
        this.producers = producers.join(",");
        this.licensors = licensors.join(",");
    }
}