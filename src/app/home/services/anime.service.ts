import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { IAnime } from "../entities/IAnime";

@Injectable()
export class AnimeService {

    url: string = "https://api.jikan.moe/v4/anime";

    constructor(private httpClient: HttpClient) {}

    getAnimeList(): Observable<IAnime[]> {
        return this.httpClient.get(`${this.url}?limit=25`).pipe(
            map((response: any) => this.convertToIAnime(response.data))
        )
    }

    private convertToIAnime(data: any[]): IAnime[] {
        const animeList = data.map(anime => {

            const producers = anime.producers.map((producer: any) => {
                return { id: producer.mal_id, name: producer.name };
            });

            const licensors = anime.licensors.map((licensor: any) => {
                return { id: licensor.mal_id, name: licensor.name }
            });

            const genres = anime.genres.map((genre: any) => {
                return { name: genre.name }
            });

            return {
                id: anime.mal_id,
                images: anime.images.jpg,
                title: anime.title,
                title_english: anime.title_english,
                title_japanese: anime.title_japanese,
                type: anime.type,
                source: anime.source,
                status: anime.status,
                airing: anime.airing,
                episodes: anime.episodes,
                aired: anime.aired.string,
                duration: anime.duration,
                rating: anime.rating,
                score: anime.score,
                rank: anime.rank,
                popularity: anime.popularity,
                members: anime.members,
                synopsis: anime.synopsis,
                producers,
                licensors,
                genres
            }
        })
        return animeList as IAnime[];
    }
}