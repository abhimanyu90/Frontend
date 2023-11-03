
import React, { useState } from 'react';

function RecipeForm(props) {
    const [imageUrl, setImageUrl] = useState('');
    const [recipeName, setRecipeName] = useState('');

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    const handleRecipeNameChange = (e) => {
        setRecipeName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        props.onFormChange('description', e.target.value);
    };

    const handleClick = () => {
        props.onFormChange('image', imageUrl);
        props.onFormChange('recipeName', recipeName); // Include Recipe Name in the data
    };

    return (
        <div className="text-center" style={{ maxWidth: "40%", margin: "0px auto" }}>
            <input
                type="text"
                value={imageUrl}
                onChange={handleImageUrlChange}
                className="form-control my-3"
                placeholder="Image URL"
            />
            <input
                type="text"
                value={recipeName} // Use the local state for Recipe Name
                onChange={handleRecipeNameChange}
                className="form-control my-3"
                placeholder="Recipe Name"
                style={{ fontWeight: 'bold' }}
            />
            <textarea
                value={props.descriptionValue}
                onChange={handleDescriptionChange}
                className="form-control my-3"
                placeholder="Enter Recipe Description"
                rows="3"
            />
            <button onClick={handleClick} className="btn btn-success d-block mx-auto" type="submit">
                Submit
            </button>
        </div>
    );
}

export default RecipeForm;
