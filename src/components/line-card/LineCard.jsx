import './LineCard';
import { NavLink } from 'react-router-dom';
import Btn from '../card/button/btn';
import Rating from '../card/rating/Rating';

const LineCard = (props) => {
    return (
        <article className="line-card">
            <div className="line-card__inner">
                <div className="line-card__img">
                    <img src="" alt="" />
                </div>
                <NavLink to={`/sale/${props.id}`} className='line-card__link'>
                    <h3 className='line-card__title'>{props.title}</h3>
                </NavLink>
                <div className='line-card__info'>
                    <Rating feedback={props.feedback} />
                    <p className='line-card__reserve'>{props.reserve}</p>
                </div>
            </div>
            <div className='line-card__price line-card__price--sale'>
                <div className="line-card__false-price">{props.falsePrice}</div>
                <div className="line-card__price-wrapper">
                    <div className='line-card__price-text'>{props.price}</div>
                    <Btn text='В корзину' />
                </div>
            </div>
        </article>
    )
}

export default LineCard;