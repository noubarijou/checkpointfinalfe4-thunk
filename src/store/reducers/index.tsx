import { combineReducers } from "redux";
import { fetchCharactersReducer } from "./fetchCharactersReducer";

const reducers = combineReducers({
    char: fetchCharactersReducer,
})

export default reducers;