import React from 'react';
import HalfStar from '../../SVG/HalfStar';
import Star from '../../SVG/Star';

const StarRating = ({ rating }) => {
    const stars = [];
    let rate = Math.floor(rating);
    for (let i = 0; i < rate; i++) {
        stars.push(<Star color='black' key={i} />);
    }
    if (rating - rate >= 0.5) {
        stars.push(<HalfStar key={rate} />);
        rate++;
    }
    for (let i = rating; i < 10; i++) {
        stars.push(<Star color='white' key={i} />);
    }
    return <div>

        {
            rating ?
                <div className='flex justify-between items-center'>
                    {stars}
                </div>
                :
                <span>Any rating</span>
        }

    </div>
};

export default StarRating;
