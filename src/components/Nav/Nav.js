import './Nav.css';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='container'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a className='nav__link' href='#'>Главная</a>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__link' href='#'>Каталог</a>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__link' href='#'>Доставка и оплата</a>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__link' href='#'>Гарантия и сервис</a>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__link' href='#'>Акции и скидки</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;