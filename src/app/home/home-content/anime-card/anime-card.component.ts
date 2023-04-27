import { Component, Input, OnInit } from "@angular/core";
import { IAnime } from "../../entities/IAnime";

@Component({
    selector: "anime-card",
    templateUrl: "./anime-card.component.html",
    styleUrls: ["./anime-card.component.css"]
})
export class AnimeCardComponent implements OnInit {

    @Input() anime!: IAnime;
    shortSynopsis!: string;

    ngOnInit(): void {
        this.shortSynopsis = this.toShortSynopsis(this.anime.synopsis);
    }
    
    toShortSynopsis(value: string): string {
        return value.slice(0, 150);
    }
    
}