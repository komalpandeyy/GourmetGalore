import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import styles from './Card.module.css'; // Import CSS Modules for component-specific styles

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
        <div className={styles.card}>
            <h3>{label}</h3>
            
            <img src={image} alt={label} className={styles.cardImage} />
            <Button variant="info" className={styles.healthLabels} onClick={handleToggleHealthLabels}>
                {showHealthLabels ? "Hide Health Labels" : "Show Health Labels"}
            </Button>
            {showHealthLabels && (
                <div className={styles.healthLabelsContainer}>
                    {healthLabels.map((tag, index) => (
                        <span key={index} className={styles.healthLabel}>{tag}</span>
                    ))}
                </div>
            )}
            
            {/* <div>
                <ul>
                    {ingredientLines.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div> */}
            
            <Button variant={isFavorite ? "danger" : "success"} onClick={handleAddToFavorites}>
                {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </Button>
            <Button variant="primary" onClick={handleViewRecipe}>View Detailed Recipe</Button>
        </div>
    );
};

export default Card;
