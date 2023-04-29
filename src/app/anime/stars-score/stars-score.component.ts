import { Component, Input } from "@angular/core";

@Component({
    selector: "anime-stars-score",
    templateUrl: "./stars-score.component.html",
    styleUrls: ["./stars-score.component.css"]
})
export class StarsScoreComponent {
    @Input() score!: number
}