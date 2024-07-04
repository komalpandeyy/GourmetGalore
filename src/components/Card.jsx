import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

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
        <div className={Styles.recipe}>


            <img className={Styles.photo} src={image} alt={label} style={{ display: "block" }} />

            <h3 className={Styles.label}>{label}</h3>

            <button className={Styles.healthLabel} onClick={handleToggleHealthLabels}>
                {showHealthLabels ? "Hide Health Labels" : "Show Health Labels"}
            </button>
            {showHealthLabels && (
                <div className={Styles.item}>

                    {healthLabels.map((tag, index) => (
                        <span
                            key={index}
                            className={Styles.tag}
                            style={{ backgroundColor: index % 2 === 0 ? '#6c5ce7' : '#f76c6c' }}>
                            {tag}
                        </span>
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

            <button
                className={`${Styles.favLabel} ${isFavorite ? Styles.favActive : ''}`}
                onClick={handleAddToFavorites}
            >
                <FontAwesomeIcon icon={isFavorite ? solidStar : regularStar} />
            </button>


            <button onClick={handleViewRecipe} className={Styles.detailedLabel}>View Detailed Recipe</button>
        </div>
    );
};

export default Card;
