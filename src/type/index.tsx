export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: object;
    location: object;
    image: string;
    episode: string;
    url: string;
    created: string;
    favorite: boolean;
}

export type GlobalState = {
    char: {
        characters: {
            id: number;
            name: string;
            status: string;
            species: string;
            type: string;
            gender: string;
            origin: object;
            location: object;
            image: string;
            episode: string;
            url: string;
            created: string;
            favorite: boolean;
        }[];
        isFetching: boolean;
        errorMessage: string;
    }
}