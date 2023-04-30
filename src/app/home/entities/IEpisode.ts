export interface IEpisode {
    id: number;
    title: string;
}

export interface IEpisodeList {
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
    },
    data: IEpisode[]
}

export interface IEpisodeDetails {
    id: number;
    title: string;
    title_japanese: string;
    synopsis: string;
}