import './Header.css';
import Logo from './logo/Logo';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__wrapper'>
                    <Logo />
                </div>
            </div>
        </header>
    )
}

export default Header;