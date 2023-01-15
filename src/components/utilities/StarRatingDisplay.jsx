import React from 'react';
import Star from '../../SVG/Star';
import HalfStar from '../../SVG/HalfStar';

const StarRatingDisplay = ({ rating }) => {
    const stars = [];
    let rate = Math.floor(rating);

    for (let i = 0; i < rate; i++) {
        stars.push(<Star key={i} />);
    }

    if (rating - rate >= 0.5) {
        stars.push(<HalfStar key={rate} />);
        rate++;
    }

    for (let i = rate; i < 10; i++) {
        stars.push(<Star key={i} isEmpty={true} />);
    }

    return (
        <div>
            {rating ? (
                <div className="d-flex justify-content-between align-items-center">
                    {stars}
                </div>
            ) : (
                <span>Any rating</span>
            )}
        </div>
    );
};

export default StarRatingDisplay;
