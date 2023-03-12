import './ProductImg.css';
import img from './../../img/1.jpg';

const ProductImg = () => {
    return (
        <div className="product-img">
            <img src={img} alt='Телескоп' />
        </div>
    )
}

export default ProductImg;