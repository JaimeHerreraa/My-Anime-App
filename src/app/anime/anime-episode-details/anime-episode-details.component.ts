import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, detailsLoadingSelector, episodeDetailsSelector, errorSelector } from "../state/anime.reducer";
import { IEpisodeDetails } from "src/app/home/entities/IEpisode";
import { Subscription } from "rxjs";
import { IError } from "../entities/IError";


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
    error!: IError;
    errorSub!: Subscription;

    constructor(private store: Store<AppState>) {}
    ngOnInit(): void {
        this.loadingSub = this.store.select(detailsLoadingSelector).subscribe(status => {
            this.loadingStatus = status;
        });
        this.errorSub = this.store.select(errorSelector).subscribe(error => {
            this.error = error;
            if(this.error.status > 300) {
                this.detailSub.unsubscribe();
                this.loadingSub.unsubscribe();
                this.errorSub.unsubscribe();
            }
        });
        this.detailSub = this.store.select(episodeDetailsSelector).subscribe(details => {
            this.episodeDetails = details;
            if(this.episodeDetails) {
                this.detailSub.unsubscribe();
                this.loadingSub.unsubscribe();
                this.errorSub.unsubscribe();
            }
        })
    }

}