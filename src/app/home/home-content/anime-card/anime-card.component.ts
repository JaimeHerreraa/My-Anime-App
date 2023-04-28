import { Component, Input, OnInit } from "@angular/core";
import { IAnime } from "../../entities/IAnime";
import { Router } from "@angular/router";

@Component({
    selector: "anime-card",
    templateUrl: "./anime-card.component.html",
    styleUrls: ["./anime-card.component.css"]
})
export class AnimeCardComponent implements OnInit {

    @Input() anime!: IAnime;

    constructor(private router: Router) {}
    ngOnInit(): void {
    }
    
    navigate(): void {
        this.router.navigate([`anime/${this.anime.id}`]);
    }
}