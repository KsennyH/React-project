import Rating from '../../components/card/rating/Rating';
import Price from '../../components/price/Price';
import ProductImg from '../../components/product-img/ProductImg';
import './Product.css';

const Product = () => {
    return (
        <>
            <ProductImg />
            <Rating />
            <Price />
        </>
    )
}

export default Product;