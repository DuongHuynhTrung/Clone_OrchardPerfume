import React from "react";
import StarRatings from "react-star-ratings";

class StarRating extends React.Component {
    render() {
        const rate = parseFloat(this.props.rating);
        return (
            <StarRatings
                rating={rate}
                starDimension="1.5em"
                starSpacing="0.1em"
                starRatedColor="#fe9728"
            />
        );
    }
}

export default StarRating;