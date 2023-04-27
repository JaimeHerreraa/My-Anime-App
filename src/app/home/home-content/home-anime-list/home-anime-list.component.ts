import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.state";
import { animesSelector } from "../../state/home.reducer";
import { IAnime } from "../../entities/IAnime";

@Component({
    selector: "home-anime-list",
    templateUrl: "./home-anime-list.component.html",
    styleUrls: ["./home-anime-list.component.css"]
})
export class HomeAnimeListComponent implements OnInit {

    animeList!: IAnime[];

    constructor(private store: Store<State>) {}
    ngOnInit(): void {
        this.store.select(animesSelector).subscribe(animes => {
            this.animeList = animes;
        })
    }

}