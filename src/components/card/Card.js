import './Card.css';
import image from './../../img/1.jpg';
import Btn from './button/btn';
import Rating from './rating/Rating';

const Card = (props) => {
    return (
        <article className="card">
            <div className='card__inner'>
                <div className="card__img">
                    <img src={props.img} alt={props.title} />
                </div>
                <a className='card__link'>
                    <h3 className='card__title'>{props.title}</h3>
                </a>
                <div className='card__info'>
                    <Rating feedback={props.feedback} />
                    <p className='card__reserve'>{props.reserve}</p>
                </div>
            </div>
            <div className='card__price'>
                <div className='card__price-text'>{props.price}</div>
                <Btn />
            </div>
        </article>
    )
}

export default Card;