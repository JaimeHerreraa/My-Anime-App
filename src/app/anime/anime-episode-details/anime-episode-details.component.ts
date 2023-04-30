import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, detailsLoadingSelector, episodeDetailsSelector } from "../state/anime.reducer";
import { IEpisodeDetails } from "src/app/home/entities/IEpisode";
import { Subscription } from "rxjs";


@Component({
    selector: "anime-episode-details",
    templateUrl: "./anime-episode-details.component.html",
    styleUrls: ["./anime-episode-details.component.css"]
})
export class AnimeEpisodeDetailsComponent implements OnInit {

    episodeDetails?: IEpisodeDetails;
    detailSub!: Subscription;
    loadingStatus?: boolean;
    loadingSub!: Subscription;

    constructor(private store: Store<AppState>) {}
    ngOnInit(): void {
        this.loadingSub = this.store.select(detailsLoadingSelector).subscribe(status => {
            this.loadingStatus = status;
        })
        this.detailSub = this.store.select(episodeDetailsSelector).subscribe(details => {
            this.episodeDetails = details;
            if(this.episodeDetails) {
                this.detailSub.unsubscribe();
                this.loadingSub.unsubscribe();
            }
        })
    }

}