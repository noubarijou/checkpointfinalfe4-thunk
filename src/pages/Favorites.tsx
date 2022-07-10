import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CharacterGrid from '../components/characters/CharacterGrid';
import { fetchCharacterThunk } from '../store/actions/characters.actions';
import { Character, GlobalState } from '../type'

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */

const Favorites = () => {
    const [favChars, setFavChars] = useState<Character[]>();
    const characters = useSelector((state: GlobalState) => state.char.characters)
    const dispatch = useDispatch();
    useEffect(() => {
        let filteredCharacters = characters.filter((character: Character) => character.favorite ?? character)
        setFavChars(filteredCharacters)
    }, [characters])

    return (
        <div className='container'>
            <div className='actions'>
                <h3>Favorite Characters</h3>
                <button onClick={() => fetchCharacterThunk()(dispatch)}>
                    Clear all Favorites
                </button>
            </div>
            <CharacterGrid characters={favChars} />
        </div>
    )
}

export default Favorites;