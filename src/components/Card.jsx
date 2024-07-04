const Card =(props)=>{
    console.log(props.res.recipe);
    return(
        <div>
            <h3>{props.res.recipe.label}</h3>
            <img src = {props.res.recipe.image}></img>
            <p>{props.res.recipe.ingredientLines}</p>
            
        </div>
    )
}
export default Card;