


import React, { useState} from 'react';
import Axios from 'axios';

function RecipeCard({ recipe }) {
    const [isExpanded, setExpanded] = useState(false);
    const [ratingsAndComments, setRatingsAndComments] = useState([]);
    const [isRateAndCommentVisible, setRateAndCommentVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleCommentsChange = (e) => {
        setComments(e.target.value);
    };

    const viewRateComment = (recipeId) => {
        setRateAndCommentVisible(true);
    };

    const viewRatingsAndComments = (recipeId) => {
        Axios.get(`http://localhost:4000/recipeRoute/get-ratings-comments/${recipeId}`)
            .then((res) => {
                if (res.status === 200) {
                    setRatingsAndComments(res.data);
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    };

    const handleRateCommentSubmit = () => {
        const data = {
            name,
            email,
            rating,
            comments,
        };
        console.log('Sending data to server:', data);

        Axios.post(`http://localhost:4000/recipeRoute/rate-comment/${recipe._id}`, data)
            .then((res) => {
                if (res.status === 200) {
                    alert('Rating and comments submitted successfully');
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card" >
                {recipe.image ? (
                    <img src={recipe.image} className="card-img-top" alt="Recipe" />
                ) : (
                    <div className="card-img-top">No Image</div>
                )}
                <div className="card-body">
                    <h5 className="card-title">{recipe.recipeName}</h5>
                    {isExpanded && <p className="card-text">{recipe.description}</p>}
                </div>
                <div className="card-footer">
                    <button
                        className='p-2 m-2'
                        style={{
                            background: "yellow",
                            border: "2px solid yellow",
                            borderRadius: "10px"
                        }}
                        onClick={() => setExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Hide Description' : 'Read Description'}
                    </button>
                    <button
                        className='p-2 m-2'
                        style={{
                            background: "greenyellow",
                            border: "2px solid greenyellow",
                            borderRadius: "10px"
                        }}
                        onClick={() => viewRateComment(recipe._id)}
                    >
                        Rate and Comment
                    </button>
                    <button
                        className='p-2 m-2'
                        style={{
                            background: "lightblue",
                            border: "2px solid lightblue",
                            borderRadius: "10px"
                        }}
                        onClick={() => viewRatingsAndComments(recipe._id)}
                    >
                        View Ratings & Comments
                    </button>
                </div>
                {isRateAndCommentVisible && (
                    <div className="rate-comment-form ">
                        <h3>Rate and Comment</h3>
                        <div className="form-group ">
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Your Name"
                                className="form-control bg-warning"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Your Email"
                                className="form-control bg-warning"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                value={rating}
                                onChange={handleRatingChange}
                                placeholder="Rate (0-5)"
                                className="form-control bg-warning"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                value={comments}
                                onChange={handleCommentsChange}
                                placeholder="Comments"
                                rows="3"
                                className="form-control bg-warning"
                            />
                        </div>
                        <button
                            onClick={handleRateCommentSubmit}
                            className="btn btn-success my-2"
                        >
                            Submit Rating and Comments
                        </button>
                    </div>
                )}
                {ratingsAndComments.length > 0 && (
                    <div>
                        <h5>Ratings & Comments</h5>
                        {ratingsAndComments.map((rating, index) => (
                            <div key={index}>
                                <p><strong>{rating.name}:</strong> Rating: {rating.rating}</p>
                                <p>{rating.comments}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecipeCard;

