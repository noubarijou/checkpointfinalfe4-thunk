import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CharacterGrid from '../components/characters/CharacterGrid'
import Filters from '../components/characters/Filters'
import PageNavigation from '../components/pagenavigation/PageNavigation'
import { fetchCharacterStart, fetchCharacterThunk } from '../store/actions/characters.actions'
import { GlobalState } from '../type'

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */

const Home = () => {
    const { characters } = useSelector((state: GlobalState) => state.char)

    const dispatch = useDispatch();

    useEffect(() => {
        if (characters.length === 0) {
            dispatch(fetchCharacterStart())
            fetchCharacterThunk()(dispatch)
        }
    }, [characters.length, dispatch])


    return (
        <div className='container'>
            <h3>Character List</h3>
            <Filters />
            <PageNavigation />
            <CharacterGrid characters={characters} />
            <PageNavigation />
        </div>
    )
}

export default Home;