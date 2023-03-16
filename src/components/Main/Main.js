import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import OrderList from '../OrderList/OrderList';
import './Main.css'

const Main = () => {
    const [meals, setMeals] = useState([])
    const [selectedMeals, setSelectedMeal] = useState([])
    console.log(selectedMeals)
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])

    const handleMenu = (meal)=>{
        console.log('clicked')
        const newSelectedMeal = [...selectedMeals, meal]
        setSelectedMeal(newSelectedMeal);
    }
    // console.log(meals)
    return (
        <div className='main'>
            <div className='main-container'>
                {
                    meals.map(meal=><Meal meal = {meal} key={meal.idMeal} handleMenu = {handleMenu}></Meal>)
                }
            </div>
            <div className='sidebar'>
                <OrderList selectedMeals = {selectedMeals}></OrderList>
            </div>
        </div>
    );
};

export default Main;