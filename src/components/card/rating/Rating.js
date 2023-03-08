import StarsRating from '../stars/StarsRating';
import './Rating.css';

const Rating = () => {
    return (
        <div className='rating'>
            <StarsRating />
            <a className='rating__feedback'>(3)</a>
        </div>
    )
} 

export default Rating;