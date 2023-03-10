import { NavLink } from 'react-router-dom';
import './Card.css';
import Btn from './button/btn';
import Rating from './rating/Rating';

const Card = (props) => {

    return (
        <article className="card" id={props.id}>
            <div className='card__inner'>
                <div className="card__img">
                    <img src={props.img} alt={props.title} />
                </div>
                <NavLink to={`/product/${props.id}`} className='card__link'>
                    <h3 className='card__title'>{props.title}</h3>
                </NavLink>
                <div className='card__info'>
                    <Rating feedback={props.feedback} />
                    <p className='card__reserve'>{props.reserve}</p>
                </div>
            </div>
            <div className='card__price'>
                <div className='card__price-text'>{props.price}</div>
                <Btn text='В корзину' />
            </div>
        </article>
    )
}

export default Card;