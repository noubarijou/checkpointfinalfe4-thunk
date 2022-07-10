import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { favoriteCharacters, fetchCharacterIdThunk } from "../../store/actions/characters.actions";
import { Character } from "../../type"
import FavButton from "../buttons/FavButton";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */


export type Char = {
    character: Character;
}

const CharacterCard = ({ character }: Char) => {
    const dispatch = useDispatch();

    const handleFavorite = () => {
        dispatch(favoriteCharacters(character.id))
    }

    const handleDetails = () => {
        fetchCharacterIdThunk(character.id)(dispatch);
    }


    return (
        <>
            <article className="characterCard">
                <Link onClick={handleDetails} to='/details'>
                    <img src={character.image} alt={character.name} />
                </Link>
                <div className="characterCardBody">
                    <span>{character.name}</span>
                    <FavButton handleClick={handleFavorite} isFavorite={character.favorite} />
                </div>
            </article>
        </>
    )
}

export default CharacterCard;