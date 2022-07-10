import { Link } from 'react-router-dom';
/**
 * Cabeçalho que contém os links para navegar entre as páginas
 *
 * Uso: `<Cabecalho />`
 *
 * @returns {JSX.Element}
 */

const Header = () => {
    return (
        <header className="Header">
            <h2>Frontend IV Final CP</h2>
            <nav className="Nav">
                <ul className="Nav__links">
                    <li className="Nav__link">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="Nav__link">
                        <Link to="/favorites">
                            Favorites
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header