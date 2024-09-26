const IngredientList = (props) => {
    return (
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button
              onClick={props.addToBurger}
              name={ingredient.name}
              value={ingredient.color}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;