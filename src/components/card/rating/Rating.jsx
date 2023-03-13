import StarsRating from '../stars/StarsRating';
import './Rating.css';

const Rating = (props) => {
    return (
        <div className='rating'>
            <StarsRating />
            <a className='rating__feedback'>{props.feedback}</a>
        </div>
    )
} 

export default Rating;