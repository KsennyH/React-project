import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='container'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <NavLink className='nav__link' to='/'>Главная</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink className='nav__link' to='/catalog'>Каталог</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink className='nav__link' to='/payment'>Доставка и оплата</NavLink>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__link' href='#'>Гарантия и сервис</a>
                    </li>
                    <li className='nav__item'>
                        <NavLink className='nav__link' to='/sale2'>Акции и скидки</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;