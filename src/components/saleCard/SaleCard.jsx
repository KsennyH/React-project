import './SaleCard.css';
import { NavLink } from 'react-router-dom';
import Btn from '../card/button/btn';
import Rating from '../card/rating/Rating';

const SaleCard = (props) => {
    return (
        <article className="card card--sale" id={props.id}>
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
                <div className="card__false-price">{props.falsePrice}</div>
                <div className="card__price-wrapper">
                    <div className='card__price-text'>{props.price}</div>
                    <Btn text='В корзину' />
                </div>
            </div>
        </article>
    )
}

export default SaleCard;