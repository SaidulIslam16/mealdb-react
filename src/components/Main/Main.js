import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import OrderList from '../OrderList/OrderList';
import './Main.css'

const Main = () => {
    const [meals, setMeals] = useState([])
    const [selectedMeals, setSelectedMeal] = useState([])
    // console.log(selectedMeals)
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])

    // console.log(selectedMeals)

    const handleMenu = (meal)=>{
        // console.log(meal)
        // check if already exist in sidebar
        const exist = selectedMeals.find(item=>item.strMeal === meal.strMeal)
        // console.log(exist);
        // let count = 0;
        if(!exist){
            const newSelectedMeals = [...selectedMeals, {...meal, count: 1}]
            setSelectedMeal(newSelectedMeals)
            // console.log('new item selected')
        }
        else{
            const updateMeals = [...selectedMeals]
            // console.log(updateMeals, "item already exist")
            for (const id of updateMeals){
                if(id===exist){
                    id.count++
                }
                // console.log(id.count)
            }

            setSelectedMeal(updateMeals);           
        }

        
        // if(!exist){
        //     const newSelectedMeals = [...selectedMeals, {...meal, count: 1}]
        //     setSelectedMeal(newSelectedMeals);
        //     // console.log(selectedMeals);
        // }
        // else{
        //     const u{pdateMeals = [...selectedMeals];
        //     updateMeals[meal].count++;
        //     setSelectedMeal(updateMeals)
        // }
    }

    // const handleDelete = (index) => {
    //     console.log(index, 'hello')
    //     for (const item of index){
    //         console.log(item)
    //         const updatedItems = selectedMeals.filter(item=>item.idMeal !== index.idMeal);
    //         console.log(updatedItems)
    //     }
        
    //     // setSelectedMeal(updatedItems);
    //     // set the state with the updated array
    //   }
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