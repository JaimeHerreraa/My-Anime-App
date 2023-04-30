import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as AnimeActions from "../state/anime.actions";
import { ActivatedRoute } from "@angular/router";
import { loadingSelector } from "../state/anime.reducer";

@Component({
    selector: "anime-layout",
    templateUrl: "./anime-layout.component.html",
    styleUrls: ["./anime-layout.component.css"]
})
export class AnimeLayoutComponent implements OnInit {

    loading!: boolean;
    constructor(private store: Store, private route: ActivatedRoute) {}
    ngOnInit(): void {
        this.store.select(loadingSelector).subscribe(status => {
            this.loading = status;
        })
        
        this.store.dispatch(AnimeActions.getAnime({id: Number(this.route.snapshot.params["id"])}));
        this.store.dispatch(AnimeActions.getEpisodeList({id: Number(this.route.snapshot.params["id"])}));
    }

}