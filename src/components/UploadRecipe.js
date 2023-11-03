


import React, { useState } from 'react';
import Axios from 'axios';
import RecipeForm from './RecipeForm';

function UploadRecipe() {
    const [recipeData, setRecipeData] = useState({
        description: '',
        image: '',
        recipeName: '', // Add a new state for Recipe Name
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:4000/recipeRoute/upload-recipe', recipeData)
            .then((res) => {
                if (res.status === 200) {
                    alert('Recipe added successfully');
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    };

    const handleFormChange = (key, value) => {
        setRecipeData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <RecipeForm
                onFormChange={handleFormChange}
                descriptionValue={recipeData.description}
                recipeNameValue={recipeData.recipeName} // Pass the Recipe Name from state
            />
        </form>
    );
}

export default UploadRecipe;
