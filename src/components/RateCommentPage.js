

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function RateCommentPage({ match }) {
    const [ratingsAndComments, setRatingsAndComments] = useState([]);

    useEffect(() => {
        // Fetch ratings and comments for the selected recipe
        Axios.get(`http://localhost:4000/recipeRoute/get-ratings-comments/${match.params.id}`)
            .then((res) => {
                if (res.status === 200) {
                    setRatingsAndComments(res.data);
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }, [match.params.id]);

    return (
        <div>
            <h2>Ratings & Comments</h2>
            {ratingsAndComments.map((rating, index) => (
                <div key={index}>
                    <p><strong>{rating.name}:</strong> Rating: {rating.rating}</p>
                    <p>{rating.comments}</p>
                </div>
            ))}
        </div>
    );
}

export default RateCommentPage;
