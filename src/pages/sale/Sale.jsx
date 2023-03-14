import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SaleCard from '../../components/saleCard/SaleCard';
import './Sale.css';
import { sale } from '../../data/sale';

const Sale = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <div className="container">
                    <section className="products">
                        <div className="products__title">
                            <h2 className="title">Товары со скидкой</h2>
                        </div>
                        <ul className="products__list">
                            {sale.map((el) => {
                                return (
                                    <li className="products__item">
                                        <SaleCard id={el.id} title={el.title} img={el.img} reserve={el.reserve} price={el.price} falsePrice={el.falsePrice} feedback={el.feedback} />
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Sale;