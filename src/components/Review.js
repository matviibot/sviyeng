import React from 'react';

const Review = ({name, text, img}) => {
    return (
        <div className="review text-center">
            <div className="image-name-container pb-5">
                <img src={img} alt="image" className="m-5 mx-auto" />
                <h2>{name}</h2>
            </div>

            <div className="dialog-box">
                <div className="dialog-content">
                    <p className="fw-light fs-5">
                        {text}
                    </p>
                </div>
                <div className="dialog-triangle"></div>
            </div>
        </div>

    );
};

export default Review;