import './Logo.css';
import logo from './telescope.svg';

const Logo = () => {
    return (
        <div className='logo'>
            <a className='logo__link'>
                <img className='logo__img' src={logo} alt='Логотип интернет-магазина Astronaut' />
                <div className='logo__text'>
                    <h2 className='logo__title'>ASTRONAUT</h2>
                    <p className='logo__descr'>Интернет-магазин телескопов</p>
                </div>
            </a>
        </div>
    )
}

export default Logo;