import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Payment.css';

const Payment = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <div className='container'>
                    <div class="payment">
                        <div className='payment__info'>
                            <h1 className='payment__title title'>Добро пожаловать в интернет-магазин телескопов <span className="uppercase">"Astronaut"!</span></h1>
                            <p>Если Вы искали где купить телескоп в Костроме, то лучше всего это сделать в нашем специализированном магазине. Здесь Вы найдете широчайший выбор телескопов и принадлежностей к ним, литературы и других сопутствующих товаров, а также получите исчерпывающие и авторитетные консультации по любым вопросам, связанным с астрономией, которые дадут Вам наши консультанты.
                            </p>
                            <p>Наш магазин предлагает широкий выбор телескопов различного уровня только от самых известных и проверенных производителей: Celestron, Synta, Meade, Sky-Watcher, Levenhuk, Vixen. У нас можно приобрести телескоп любого уровня, на любой вкус и кошелек - от моделей для начинающих до самых больших и профессиональных телескопов. В нашем магазине Вам помогут подобрать не только сам телескоп, но и окуляры, линзы Барлоу, диагональные призмы, искатели, моторы, фокусеры, ПЗС-камеры и другие оптические приборы для наблюдений. Мы осуществляем продажу в Костромской и Ивановской областях с доставкой товара.
                            </p>
                        </div>
                        <div className='payment__pay'>
                            <h3 class="payment__subtitle">Способы оплаты</h3>
                            <ul class="payment__list">
                                <li class="payment__item">Оплата наличными</li>
                                <li class="payment__item">Оплата банковской картой VISA, MASTERCARD, МИР</li>
                            </ul>
                            <p class="payment__text">После того как Вы осмотрели покупку и убедились, что все в порядке, Вы платите курьеру наличными или картой.</p>
                        </div>
                        <div className='payment__delivery'>
                            <h3 class="payment__subtitle">Доставка</h3>
                            <p class="payment__shedule">Забрать товар можно самостоятельно в любой день с 10:00 до 19:00 в пунктах выдачи:</p>
                            <ul class="payment__list">
                                <li class="payment__item">
                                    <address class="payment__address">Кострома, ул. Народная, д. 54</address>
                                </li>
                                <li class="payment__item">
                                    <address class="payment__address">Иваново, ул. Ермака, д. 25, корпус 2</address>
                                </li>
                                <li class="payment__item">
                                    <address class="payment__address">Волгореченск, ул. Текстильная, д. 18, 2 этаж</address>
                                </li>
                                <li class="payment__item">
                                    <address class="payment__address">Приволжск, ул. Революционная, д. 21</address>
                                </li>
                            </ul>
                            <p>Вы можете заказать доставку курьером. Заказ придёт в течение 5 дней. Стоимость доставки зависит от веса и габаритов заказа.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Payment;