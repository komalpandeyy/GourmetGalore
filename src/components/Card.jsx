import React, { useState } from "react";

const Card = (props) => {
    const { recipe } = props.res;
    const { label, healthLabels, ingredientLines, image, shareAs } = recipe;
    const [isFavorite, setIsFavorite] = useState(false);
    const [showHealthLabels, setShowHealthLabels] = useState(false);

    const handleViewRecipe = () => {
        window.open(shareAs, "_blank");
    };

    const handleAddToFavorites = () => {
        setIsFavorite(!isFavorite);
    };

    const handleToggleHealthLabels = () => {
        setShowHealthLabels(!showHealthLabels);
    };

    return (
        <div>
            <h3>{label}</h3>
            
            <button onClick={handleToggleHealthLabels}>
                {showHealthLabels ? "Hide Health Labels" : "Show Health Labels"}
            </button>
            {showHealthLabels && (
                <div>
                    {healthLabels.map((tag, index) => (
                        <span key={index} style={{ marginRight: "5px" }}>{tag}</span>
                    ))}
                </div>
            )}
            
            <img src={image} alt={label} />
            
            <div>
                <ul>
                    {ingredientLines.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            
            <button onClick={handleAddToFavorites}>
                {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </button>
            <button onClick={handleViewRecipe}>View Detailed Recipe</button>
        </div>
    );
};

export default Card;
