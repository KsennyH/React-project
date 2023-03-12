import ProductImg from '../../components/product-img/ProductImg';
import ProductInfo from '../../components/product-info/ProductInfo';
import './Product.css';

const Product = () => {
    return (
        <div className='product'>
            <h1 className="product__title title">Телескоп Sky-Watcher BK 709EQ2</h1>
            <div className="product__wrapper">
                <ProductImg />
                <ProductInfo />
            </div>
        </div>
    )
}

export default Product;