import Logo from '../header/logo/Logo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <Logo />
                    <div className='footer-info'>
                        <h3 className='footer-info__title'>Покупателям</h3>
                        <ul className='footer-info__list'>
                            <li className='footer-info__item'>
                                <a className='footer-info__link'>Каталог</a>
                            </li>
                            <li className='footer-info__item'>
                                <a className='footer-info__link'>Доставка и оплата</a>
                            </li>
                            <li className='footer-info__item'>
                                <a className='footer-info__link'>Гарантия и сервис</a>
                            </li>
                            <li className='footer-info__item'>
                                <a className='footer-info__link'>Акции и скидки</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-info'>
                        <h3 className="footer-info__title">Информация</h3>
                        <a className="footer-info__link" href="#">Политика конфиденциальности</a>
                    </div>
                    <div className='footer-info'>
                        <h3 class="footer-info__title">Контакты</h3>
                        <address class="footer-info__address">
                            <p class="footer-info__place">г. Кострома, пр-т Текстильщиков, 13</p>
                            <a class="footer-info__phone" href="tel:+89157861312">8 (915) 786-13-12</a>
                            <a class="footer-info__mail" href="mailto:info@astronaut.ru">info@astronaut.ru</a>
                            <p class="footer-info__shedule">Ежедневно: 10.00 - 21.00</p>
                        </address>
                    </div>
                </div>
            </div>
            <div className='footer__copy'>
                <div className='container'>
                    <p>Интернет-магазин телескопов <span className="uppercase">"Astronaut"!</span>, 2018</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;