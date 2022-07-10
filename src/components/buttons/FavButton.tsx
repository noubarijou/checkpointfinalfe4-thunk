import markedFavorite from "../img/star-filled.png";
import notFavorite from "../img/star.png";
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */

interface Button {
    isFavorite: boolean;
    handleClick?: any;
}

const FavButton = ({ isFavorite, handleClick }: Button) => {
    const source = isFavorite ? markedFavorite : notFavorite;
    return (
        <div className="FavButton">
            <img src={source} alt={'favorito'} onClick={handleClick} />
        </div>
    )
}

export default FavButton;