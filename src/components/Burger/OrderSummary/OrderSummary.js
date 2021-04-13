import React from 'react';
import Auxi from '../../../hoc/Auxi';

import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return(
        <Auxi>
            <h3>Your Order</h3>
            <p>Burger Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger"clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </Auxi>
    );
};

export default OrderSummary;