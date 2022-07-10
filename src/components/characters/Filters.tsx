import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCharacterThunk, filterCharacterThunk } from '../../store/actions/characters.actions';

const Filters = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const input = useRef(null);

    const handleClick = (event: any) => {
        if (!text) {
            fetchCharacterThunk()(dispatch)
        } else {
            filterCharacterThunk(text)(dispatch);
        }
    }

    const handleClear = () => {
        setText('');
        fetchCharacterThunk()(dispatch);
    }

    const handleOnChange = (event: any) => {
        setText(event.target.value)
    }

    return (
        <div className='filters'>
            <label htmlFor="name">Search characters here</label>
            <input
                type="text"
                ref={input}
                placeholder="Bird Person, Scary Terry..."
                name="name"
                onChange={handleOnChange}
                value={text}
            />
            <div className='filterButtons'>
                <button onClick={handleClick}>Search</button>
                <button onClick={handleClear}>Clear</button>
            </div>
        </div>
    )
}

export default Filters