import Btn from '../card/button/btn';
import './Price.css';

const Price = (props) => {
    return (
        <div className="price">
            <div className="price__value">{props.info.price}</div>
            <Btn text='Купить' />
        </div>
    )
}

export default Price;