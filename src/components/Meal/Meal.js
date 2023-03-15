import React from 'react';
import './Meal.css'

const Meal = (props) => {
    console.log(props.meal)
    return (
        <div className='meal-container'>
            <div className='meal-image'>
                <img src={props.meal.strMealThumb} alt="" />
            </div>
            <div>
                <h3>{props.meal.strMeal}</h3>
            </div>
        </div>
    );
};

export default Meal;