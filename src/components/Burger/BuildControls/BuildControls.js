import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import style from './BuildControls.module.css';

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
    <div className={style.BuildControls}>
        <p>Burger price: <strong>${props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}

        <button 
            className={style.OrderButton}
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default BuildControls;