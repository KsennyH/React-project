import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProductImg from '../../components/product-img/ProductImg';
import ProductInfo from '../../components/product-info/ProductInfo';
import './Product.css';
import { cards } from '../../data/cards';

const Product = (props) => {

    const {id} = useParams();
    const product = cards[id];

    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <div className="container">
                    <div className='product'>
                        <h1 className="product__title title">{product.title}</h1>
                        <div className="product__wrapper">
                            <div className="product__img">
                                <ProductImg info={product} />
                            </div>
                            <div className="product__information">
                                <ProductInfo info={product} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Product;