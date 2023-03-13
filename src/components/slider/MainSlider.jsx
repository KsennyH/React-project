import Btn from '../card/button/btn';
import './MainSlider.css';
import slideImg from './1slide.jpg';

const MainSlider = (props) => {
    return (
        <div className='main-slider'>
            <div className='main-slider__item'>
                <div className='main-slider__wrapper'>
                    <div className='main-slider__content'>
                        <h2 className='main-slider__title'>Телескоп Celestron 90 GT Wi Fi</h2>
                        <div className='main-slider__info'>
                            <p>Ахроматический рефрактор с системой автонаведения и возможностью бесповодного управления при помощи смартфонов и планшетов.</p>
                            <p>Диаметр объектива: 90 мм. Фокусное расстояние: 910 мм.</p>
                        </div>
                        <Btn text='Подробнее' />
                    </div>
                    <div className='main-slider__img'>
                        <img src={slideImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSlider;