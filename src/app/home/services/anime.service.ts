import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { IAnime } from "../entities/IAnime";
import { IEpisode, IEpisodeDetails, IEpisodeList } from "../entities/IEpisode";

@Injectable()
export class AnimeService {

    url: string = "https://api.jikan.moe/v4/anime";

    constructor(private httpClient: HttpClient) {}

    getAnimeList(): Observable<IAnime[]> {
        return this.httpClient.get(`${this.url}?type=tv`).pipe(
            map((response: any) => this.convertToIAnimeArray(response.data))
        )
    }

    getMoviesList(): Observable<IAnime[]> {
        return this.httpClient.get(`${this.url}?type=movie`).pipe(
            map((response: any) => this.convertToIAnimeArray(response.data))
        )
    }

    getAnimeById(id:number): Observable<IAnime> {
        return this.httpClient.get(`${this.url}/${id}/full`).pipe(
            map((response: any) => this.convertToIAnime(response.data))
        )
    }

    getAnimeEpisodesList(id: number | undefined): Observable<IEpisodeList> {
        return this.httpClient.get(`${this.url}/${id}/episodes`).pipe(
            map((res: any) => this.convertToIEpisodeList(res))
        )
    }

    getEpisodeDetails(animeId: number, episodeId: number): Observable<IEpisodeDetails> {
        return this.httpClient.get(`${this.url}/${animeId}/episodes/${episodeId}`).pipe(
            map((res: any) => this.convertToIEpisodeDetails(res))
        )
    }

    getEpisodeListPagination(animeId: number,pageNumber: number): Observable<IEpisodeList> {
        return this.httpClient.get(`https://api.jikan.moe/v4/anime/${animeId}/episodes?page=${pageNumber}`).pipe(
            map((res: any) => this.convertToIEpisodeList(res))
        )
    }

    private convertToIEpisodeDetails(response: any): IEpisodeDetails {
        return {
            id: response.data.mal_id,
            title: response.data.title,
            title_japanese: response.data.title_japanese,
            synopsis: response.data.synopsis
        }
    }

    private convertToIEpisodeList(response: any): IEpisodeList {
        const episodes = response.data.map((e: any) => {
            return { id: e.mal_id, title: e.title}
        })

        return {
            pagination: response.pagination,
            data: episodes
        }
    }

    private convertToIAnime(data: any): IAnime {

        const producers = data.producers.map((producer: any) => {
            return { id: producer.mal_id, name: producer.name };
        });

        const licensors = data.licensors.map((licensor: any) => {
            return { id: licensor.mal_id, name: licensor.name }
        });

        const genres = data.genres.map((genre: any) => {
            return { name: genre.name }
        });

        return {
            id: data.mal_id,
            images: data.images.jpg,
            title: data.title,
            title_english: data.title_english,
            title_japanese: data.title_japanese,
            type: data.type,
            source: data.source,
            status: data.status,
            airing: data.airing,
            episodes: data.episodes,
            aired: data.aired.string,
            duration: data.duration,
            rating: data.rating,
            score: data.score,
            rank: data.rank,
            popularity: data.popularity,
            members: data.members,
            synopsis: data.synopsis,
            producers: producers,
            licensors: licensors,
            genres: genres
        } as IAnime
    }

    private convertToIAnimeArray(data: any[]): IAnime[] {
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