import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Catalog.css';
import Card from '../../components/card/Card';
import { cards } from '../../data/cards';

const Catalog = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <div className='container'>
                    <section className='products'>
                        <div className='products__title'>
                            <h2 className='title'>Телескопы</h2>
                        </div>
                        <ul className='products__list'>
                            {cards.map((el) => {
                                return (
                                    <li className='products__item'>
                                        <Card id={el.id} title={el.title} img={el.img} reserve={el.reserve} price={el.price} feedback={el.feedback} />
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

export default Catalog;