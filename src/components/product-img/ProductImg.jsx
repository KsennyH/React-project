import './ProductImg.css';

const ProductImg = (props) => {
    return (
        <div className="product-img">
            <img src={props.info.img} alt={props.info.title} />
        </div>
    )
}

export default ProductImg;