import './Menu.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchPostsBySubreddit,
    setSelectedSubreddit
} from '../../store/redditSlice';


const subreddits = [
    { name: 'popular', value: 'Popular' },
    { name: 'pics', value: 'Pictures' },
    { name: 'javascripts', value: 'Javascripts' },
    { name: 'reactjs', value: 'reactJs' },
];

function Menu() {
    const dispatch = useDispatch();
    const selectedSubreddit = useSelector(
        (state) => state.reddit.selectedSubreddit
    );

    const [isOpen, setIsopen] = useState(false);

    const handleSubredditClick = (subreddit) => {
        dispatch(setSelectedSubreddit(subreddit));
        dispatch(fetchPostsBySubreddit(subreddit));
        setIsopen(false);
    };




    return (
        <div className='menu'>
            <button
              className='menu__toggle'
              type='button'
              onClick={() => setIsopen((currentState) => !currentState)}
              >
                ☰
            </button>

            {isOpen && (
                <nav
                id="subreddit-menu"
                className='menu__panel'
                >
                    {/* <h2 className='menu__title'>Subreddits</h2> */}
                    <ul className='menu__list'>
                        {subreddits.map((subreddit) => (
                            <li key={subreddit.value}>
                                <button
                                type='button'
                                className={
                                    selectedSubreddit === subreddit.value
                                        ? 'menu__item menu__item--active'
                                        : 'menu__item'
                                }
                                onClick={() => handleSubredditClick(subreddit.vlaue)}
                                >
                                {subreddit.value}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

        </div>
    );
};

export default Menu;