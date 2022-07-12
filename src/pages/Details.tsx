import { useSelector } from 'react-redux'
import FavButton from '../components/buttons/FavButton';
import EpisodesCard from '../components/episodes/EpisodesCard';

/**
 * Esta é a página de detalhes. Aqui você pode mostrar a visão do personagem selecionado junto com a lista de episódios em que ele aparece
 *
 * TRABALHAR NESTE ARQUIVO É OPCIONAL E NÃO É NECESSÁRIO PARA APROVAÇÃO
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalhe /> ```
 *
 * @returns Página de detalhe
 */

const Details = () => {
    const stateCharacter = useSelector((state: any) => state.char.character);
    /*const episodesArr = stateCharacter.char.episode.slice(
       stateCharacter.characters.episode.indexOf(
           "https://rickandmortyapi.com/api/episode/") + 1) */

    return (
        <div className='container'>
            <h3>{stateCharacter?.character?.name}</h3>
            <div className={"details"}>
                <div className={'detailsHeader'}>
                    <img src={stateCharacter?.character?.image} alt={stateCharacter?.character?.name} />
                    <div className={'detailsHeaderText'}>
                        <p>{stateCharacter?.character?.name}</p>
                        <p>Planet: {stateCharacter?.character?.origin.name}</p>
                        <p>Gender: {stateCharacter?.character?.gender}</p>
                    </div>
                    <FavButton isFavorite={stateCharacter.character.favorito} />
                </div>
            </div>
            <h4>List of episodes the charater was in</h4>
            <div className={'episodesGrid'}>
                <EpisodesCard />
            </div>
        </div>
    )
}

export default Details;



/* const [favChars, setFavChars] = useState<Character[]>();
const characters = useSelector((state: GlobalState) => state.char.characters)
const dispatch = useDispatch();

useEffect(() =>{
let filteredCharacters = characters.filter((character: Character) => character.favorite ?? character)
setFavChars(filteredCharacters)
}, [characters])
 

return (
<section className='detailsPage'>
    <h3>Chracter Details Page</h3>
    <CharacterCard character={characters} />
</section>
) */