import './Menu.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchPostsBySubreddit,
    setSelectedSubreddit
} from '../../store/redditSlice';



function Menu() {
    const dispatch = useDispatch();
    const subreddits = [
        { name: 'popular', value: 'Popular' },
        { name: 'pics', value: 'Pictures' },
        { name: 'javascript', value: 'Javascript' },
        { name: 'reactjs', value: 'ReactJs' },
    ];
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
                            <li key={subreddit.name}>
                                <button
                                type='button'
                                className={
                                    selectedSubreddit === subreddit.name
                                        ? 'menu__item menu__item--active'
                                        : 'menu__item'
                                }
                                onClick={() => handleSubredditClick(subreddit.name)}
                                >
                                {subreddit.name}
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