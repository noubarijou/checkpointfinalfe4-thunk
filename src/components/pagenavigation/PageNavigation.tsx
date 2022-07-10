import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchNextPageThunk } from '../../store/actions/characters.actions';

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */

const PageNavigation = () => {
    const [page, setPage] = useState(2);
    const dispatch = useDispatch();

    const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, 826))
        fetchNextPageThunk(page)(dispatch);
    }

    const handlePrevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1))
        fetchNextPageThunk(page)(dispatch);
    }


    return (
        <nav className='pageNavigation'>
            <button className="previousButton" disabled={false} onClick={handlePrevPage}>
                Previous
            </button>
            <button className="nextButton" disabled={false} onClick={handleNextPage} >
                Next
            </button>
        </nav>
    )
}

export default PageNavigation