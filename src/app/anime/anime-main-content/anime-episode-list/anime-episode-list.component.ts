import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { IEpisodeList } from "src/app/home/entities/IEpisode";
import { AppState, episodeListSelector } from "../../state/anime.reducer";
import { ActivatedRoute } from "@angular/router";
import * as AnimeActions from "../../state/anime.actions"

@Component({
    selector: "anime-episode-list",
    templateUrl: "./anime-episode-list.component.html",
    styleUrls: ["./anime-episode-list.component.css"]
})
export class AnimeEpisodeListComponent implements OnInit, OnDestroy {
    @Input() animeType!: string | undefined;

    episodeList?: IEpisodeList;
    sub!: Subscription;
    currentPage: number = 1;
    animeId!: number;

    constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.animeId = Number(this.route.snapshot.params["id"]);
        this.sub = this.store.select(episodeListSelector).subscribe(response => {
            this.episodeList = response;
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onClick(episodeId: number): void {
        this.store.dispatch(AnimeActions.getEpisodeDetails({episodeId, animeId: this.animeId}));
    }

    onScroll():void {
        if (this.episodeList?.pagination.has_next_page) {
            this.currentPage++;
            this.store.dispatch(AnimeActions.episodeListPagination({animeId: this.animeId, page: this.currentPage}));
        }
    }
}