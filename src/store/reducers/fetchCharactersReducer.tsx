import { Character } from "../../type";
import { FAVORITE_CHARACTERS, FETCH_CHARACTERS_ERROR, FETCH_CHARACTERS_ID_SUCCESS, FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS } from "../actions/characters.actions";

type ActionType = {
    type: string;
    payload?: any;
}

const initialState = {
    characters: [],
    isFetching: false,
    errorMessage: undefined,
}

export const fetchCharactersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                characters: action.payload.characters,
            }
        case FETCH_CHARACTERS_ID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                character: action.payload,
            }
        case FETCH_CHARACTERS_ERROR:
            return {
                ...state,
                isFetching: false,
                characters: initialState.characters,
                errorMessage: action.payload,
            }
        case FAVORITE_CHARACTERS:
            return {
                ...state,
                characters: state.characters.map((character: Character) => {
                    if (character.id !== action.payload) {
                        return character;
                    }
                    return {
                        ...character,
                        favorite: !character.favorite,
                    }
                })
            }
        default:
            return state;
    }
}