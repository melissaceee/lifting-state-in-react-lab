import React from 'react'

// src/components/IngredientList.jsx
const IngredientList = ({availableIngredients, addToBurger}) => {
    return (<ul>
       {availableIngredients.map((ingredient, index) => {
        <li key={index} style={{ color: ingredient.color}}>
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
       })}
    </ul>
    )
  }
  
  export default IngredientList
  