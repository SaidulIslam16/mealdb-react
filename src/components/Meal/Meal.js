import React from 'react';
import './Meal.css'

const Meal = (props) => {
    // console.log(props.meal)
    return (
        <div className='meal-container'>
            <div className='meal-image'>
                <img src={props.meal.strMealThumb} alt="" />
            </div>
            <div className='meal-details'>
                <h3>{props.meal.strMeal}</h3>
                <p>{(props.meal.strInstructions).slice(0, 100)}</p>
            </div>
            <div>
                <button className='btn-addto-order' onClick={()=>props.handleMenu(props.meal)}>
                    <p>Add to Order List</p>
                </button>
            </div>
        </div>
    );
};

export default Meal;