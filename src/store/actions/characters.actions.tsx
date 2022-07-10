import { Character } from "../../type";

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR";
export const FETCH_CHARACTERS_ID_SUCCESS = "FETCH_CHARACTERS_ID_SUCCESS";
export const FAVORITE_CHARACTERS = "FAVORITE_CHARACTERS";

export const fetchCharacterStart = () => {
    return { type: FETCH_CHARACTERS_START };
};

export const fetchCharacterSuccess = (characters: Character[]) => {
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: { characters },
    }
}

export const fetchCharacterError = (errorMessage: string) => {
    return {
        type: FETCH_CHARACTERS_ERROR,
        payload: { errorMessage },
    }
}

export const favoriteCharacters = (id: number) => {
    return {
        type: FAVORITE_CHARACTERS,
        payload: id,
    }
}

export const fetchCharacterIdSuccess = (character: Character) => {
    return {
        type: FETCH_CHARACTERS_ID_SUCCESS,
        payload: { character },
    }
}

export const fetchCharacterThunk = () => async (dispatch: any) => {
    dispatch(fetchCharacterStart());
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const json = await response.json();
        const jsonFilter = json.results.map((result: any) => ({ ...result, favorito: false }))
        dispatch(fetchCharacterSuccess(jsonFilter));

    } catch (err: any) {
        dispatch(fetchCharacterError(err.message));
    }
}

export const filterCharacterThunk = (text: string) => async (dispatch: any) => {
    dispatch(fetchCharacterStart());
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${text}`);
        const json = await response.json();
        const jsonFilter = json.results.map((result: any) => ({ ...result, favorito: false }))
        dispatch(fetchCharacterSuccess(jsonFilter));
    } catch (err: any) {
        dispatch(fetchCharacterError(err.message));
    }

}

export const fetchNextPageThunk = (page: number) => async (dispatch: any) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const json = await response.json()
        const jsonFilter = json.results.map((result: any) => ({
            ...result, favorite: false
        }))
        dispatch(fetchCharacterSuccess(jsonFilter))
    } catch (err: any) {
        dispatch(fetchCharacterError(err.message))
    }
}

export const fetchCharacterIdThunk = (id: number) => async (dispatch: any) => {
    dispatch(fetchCharacterStart());
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const json = await response.json()
        dispatch(fetchCharacterIdSuccess(json))
    } catch (err: any) {
        dispatch(fetchCharacterError(err.message));
    }
}

