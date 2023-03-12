import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProductImg from '../../components/product-img/ProductImg';
import ProductInfo from '../../components/product-info/ProductInfo';
import './Product.css';

const Product = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <div className="container">
                    <div className='product'>
                        <h1 className="product__title title">Телескоп Sky-Watcher BK 709EQ2</h1>
                        <div className="product__wrapper">
                            <div className="product__img">
                                <ProductImg />
                            </div>
                            <div className="product__information">
                                <ProductInfo />
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