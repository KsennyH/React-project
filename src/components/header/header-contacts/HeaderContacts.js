import './HeaderContacts.css';

const HeaderContacts = () => {
    return (
        <div className='header-contacts'>
            <a href='tel:89157861312' className='header-contacts__tel'>8 (915) 786-13-12</a>
            <button type='button' className='header-contacts__call'>Заказать звонок</button>
            <p className='header-contacts__shedule'>Ежедневно: 10.00 - 21.00</p>
        </div>
    )
}

export default HeaderContacts;