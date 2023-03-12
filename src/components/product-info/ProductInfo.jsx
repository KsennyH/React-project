import Btn from '../card/button/btn';
import Rating from '../card/rating/Rating';
import Price from '../price/Price';
import VendorCode from '../vendor-code/VendorCode';
import './ProductInfo.css';

const ProductInfo = () => {
    return (
        <div className="product-info">
            <div className="product-info__inner">
                <VendorCode />
                <Rating />
            </div>
            <div className="product-info__price">
                <Price />
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