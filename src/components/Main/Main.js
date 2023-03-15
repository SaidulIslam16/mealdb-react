import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Main.css'

const Main = () => {
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])
    // console.log(meals)
    return (
        <div className='main'>
            <div className='main-container'>
                {
                    meals.map(meal=><Meal meal = {meal} key={meal.idMeal}></Meal>)
                }
            </div>
            <div className='sidebar'>
                <h2>Order List</h2>
            </div>
        </div>
    );
};

export default Main;