// Features.js
import React from 'react';

function Features() {
    return (
        <section className="features">
            <div className="container">
                <h2>What Makes Recipe Book Special?</h2>
                <div className="feature">
                    <i className="fas fa-utensils"></i>
                    <h3>Yummy Recipes</h3>
                    <p>Discover a wide variety of delicious recipes from around the world.</p>
                </div>
                <div className="feature">
                    <i className="far fa-edit"></i>
                    <h3>Upload Your Recipes</h3>
                    <p>Share your favorite recipes with the Recipe Book community.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-star"></i>
                    <h3>Rate and Comment</h3>
                    <p>Rate and leave comments on recipes shared by others.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-users"></i>
                    <h3>Community Driven</h3>
                    <p>Join a vibrant community of food enthusiasts and share your culinary creations.</p>
                </div>
               
            </div>
        </section>
    );
}

export default Features;
