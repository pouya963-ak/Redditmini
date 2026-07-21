import './Header.css';
import Menu from '../Menu/Menu.jsx';
import Search from '../Search/Search.jsx';

function Header() {
    return (
        <header className='header'>
            <h1 className="header__logo">Reddit Mini</h1>
            <Menu />
            <div className='oye' >
                <Search />
            </div>
        </header>
    );
}

export default Header;