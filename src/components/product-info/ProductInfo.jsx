import Btn from '../card/button/btn';
import Rating from '../card/rating/Rating';
import Price from '../price/Price';
import VendorCode from '../vendor-code/VendorCode';
import './ProductInfo.css';

const ProductInfo = (props) => {
    return (
        <div className="product-info">
            <div className="product-info__inner">
                <VendorCode info={props.info} />
                <Rating feedback={props.info.feedback} />
            </div>
            <div className="product-info__price">
                <Price info={props.info} />
            </div>
            <div className="product-info__controls">
                <div className="product-info__btns">
                    <button className="product-info__btn">В избранное</button>
                    <button className="product-info__btn">К сравнению</button>
                </div>
                <Btn text='Купить в 1 клик' />
            </div>
        </div>
    )
}

export default ProductInfo;