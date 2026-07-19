import './Header.css';
import Menu from '../Menu/Menu.jsx';

function Header() {
    return (
        <header className='header'>
            <h1 className="header__logo">Reddit Mini</h1>
            <Menu />
        </header>
    );
}

export default Header;