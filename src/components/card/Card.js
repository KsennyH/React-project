import './Card.css';
import image from './../../img/1.jpg';

const Card = () => {
    return (
        <article className="card">
            <div className="card__img">
                <img src={image} alt='Телескоп Sky-Watcher BK 709EQ2'/>
            </div>
            <a className='card__link' href='#'>
                <h3 className='card__title'>Телескоп Sky-Watcher BK 709EQ2</h3>
            </a>
            <div className='card__rating'>
                <div className='card__stars'>
                    <svg class="card-top__icon active" width="20" height="20" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" fill="#EBE32E"/>
                    </svg>
                </div>
                <a className='card__feedback-counter' href='#'>(3)</a>
            </div>
            <p className='card__reserve'>В наличии</p>
            <div className='card__price'>
                <div className='card__price-text'>14 490 руб.</div>
                <button className='card__btn'>Купить</button>
            </div>
        </article>
    )
}

export default Card;