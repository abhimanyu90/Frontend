
// import React, { useState } from 'react';
// import Axios from 'axios';
// import { useParams } from 'react-router-dom';

// function RateComment() {
//     const { id } = useParams();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [rating, setRating] = useState(0);
//     const [comments, setComments] = useState('');

//     const handleRateCommentSubmit = () => {
//         const data = {
//             name,
//             email,
//             rating,
//             comments,
//         };

//         if (!id) {
//             alert("Recipe ID is missing");
//             return;
//         }

//         Axios.post(`http://localhost:4000/recipeRoute/rate-comment/${id}`, data)
//             .then((res) => {
//                 if (res.status === 200) {
//                     alert('Rating and comments submitted successfully');
//                 } else {
//                     return Promise.reject();
//                 }
//             })
//             .catch((err) => alert(err));
//     }

//     return (
//         <div className="rate-comment-form">
//             <h3>Rate and Comment</h3>
//             <div className="form-group">
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Your Name"
//                     className="form-control"
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Your Email"
//                     className="form-control"
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     type="number"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     placeholder="Rate (0-5)"
//                     className="form-control"
//                 />
//             </div>
//             <div className="form-group">
//                 <textarea
//                     value={comments}
//                     onChange={(e) => setComments(e.target.value)}
//                     placeholder="Comments"
//                     rows="3"
//                     className="form-control"
//                 />
//             </div>
//             <button
//                 onClick={handleRateCommentSubmit}
//                 className="btn btn-primary"
//             >
//                 Submit Rating and Comments
//             </button>
//         </div>
//     );
// }

// export default RateComment;
