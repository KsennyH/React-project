import './Card.css';
import image from './../../img/1.jpg';
import Btn from './button/btn';
import StarsRating from './stars/StarsRating';
import Rating from './rating/Rating';

const Card = () => {
    return (
        <article className="card">
            <div className='card__inner'>
                <div className="card__img">
                    <img src={image} alt='Телескоп Sky-Watcher BK 709EQ2'/>
                </div>
                <a className='card__link'>
                    <h3 className='card__title'>Телескоп Sky-Watcher BK 709EQ2</h3>
                </a>
                <div className='card__info'>
                    <Rating />
                    <p className='card__reserve'>В наличии</p>
                </div>
            </div>
            <div className='card__price'>
                <div className='card__price-text'>14 490 руб.</div>
                <Btn />
            </div>
        </article>
    )
}

export default Card;