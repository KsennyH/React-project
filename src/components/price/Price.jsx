import Btn from '../card/button/btn';
import './Price.css';

const Price = () => {
    return (
        <div className="price">
            <div className="price__value">14 490 руб.</div>
            <Btn text='Купить' />
        </div>
    )
}

export default Price;