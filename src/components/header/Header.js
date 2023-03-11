import Nav from '../Nav/Nav';
import HeaderAuth from './header-auth/HeaderAuth';
import HeaderContacts from './header-contacts/HeaderContacts';
import './Header.css';
import Logo from './logo/Logo';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__wrapper'>
                    <Logo />
                    <HeaderContacts />
                    <HeaderAuth />
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default Header;