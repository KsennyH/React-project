import Header from '../../components/header/Header';
import './SaleLineCard.css';
import { sale } from '../../data/sale';
import LineCard from '../../components/line-card/LineCard';

const SaleLineCard = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <div className="container">
                    <section className="products-line-view">
                        <div className="products-line-view__title">
                            <h2 className="title">Товары со скидкой</h2>
                        </div>
                        <ul className="products-line-view__list">
                            {sale.map((el) => {
                                return (
                                    <li className="products-line-view__item">
                                        <LineCard id={el.id} title={el.title} img={el.img} reserve={el.reserve} price={el.price} falsePrice={el.falsePrice} feedback={el.feedback} />
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default SaleLineCard; 