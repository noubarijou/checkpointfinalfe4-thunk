import { MouseEventHandler } from "react";
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

interface ButtonProps {
    isFavorite: boolean;
    handleClick?: MouseEventHandler;
}

const FavButton = ({ isFavorite, handleClick }: ButtonProps) => {
    const source = isFavorite ? markedFavorite : notFavorite;
    return (
        <div className="FavButton">
            <img src={source} alt={'favorito'} onClick={handleClick} />
        </div>
    )
}

export default FavButton;