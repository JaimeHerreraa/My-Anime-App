export interface IAnime {
    id: number;
    images: IImages;
    title: string;
    title_english: string;
    title_japanese: string;
    type: string;
    source: string;
    status: string;
    airing: boolean;
    episodes: number;
    aired: string;
    duration: string;
    rating: string;
    score: number;
    rank: number;
    popularity: number;
    members: number;
    synopsis: string;
    producers: IProducer[];
    licensors: ILicensor[];
    genres: IGenre[];

}

export interface IImages {
    jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
    }
}

interface IProducer {
    id: number;
    name: string
}

interface ILicensor {
    id: number;
    name: string;
}

interface IGenre {
    name: string
}