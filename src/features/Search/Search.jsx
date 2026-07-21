import './Search.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchResults } from '../../store/redditSlice.js';

function Search() {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSearchResults(term));
        setTerm('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search' value={term} onChange={(e) => setTerm(e.target.value)}/>
            <button type='submit'>
                Search
            </button>
        </form>
    );
};

export default Search;