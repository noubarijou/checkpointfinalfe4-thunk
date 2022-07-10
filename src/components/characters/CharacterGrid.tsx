import React from 'react'
import { Character } from '../../type'
import CharacterCard from './CharacterCard'

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */

type Char = {
    characters?: Character[],
}

const CharacterGrid = ({ characters }: Char) => {
    return (
        <section className='characterGrid'>
            {characters && characters.map((character: Character) => {
                return <CharacterCard key={character.id} character={character} />
            })
            }
        </section>
    )
}

export default CharacterGrid;