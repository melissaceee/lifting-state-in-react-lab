import React from 'react';

// `src/components/BurgerStack.jsx`
const BurgerStack = ({stack, removeFromBurger}) => {
    return (
    <ul>
        {stack.map((ingredient, index) => (
            <li key={index} style={{ color: ingredient.color}}>
                {ingredient.name}
                <button onClick={() => removeFromBurger(index)}>X</button>
            </li>    
        ))}
    </ul>
    )
  }

  export default BurgerStack;
  