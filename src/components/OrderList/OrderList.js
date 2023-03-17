import React from 'react';
import './OrderList.css'

const OrderList = ({selectedMeals, handleDelete}) => {
    return (
        <div className='ordered-list'>
            <h2>Order List</h2>
            <h3>seleted Meals: {selectedMeals.length}</h3>
                {
                    selectedMeals.length>0 &&(
                        <ul>
                            {
                                selectedMeals.map(
                                    meal=><li className='list'>{meal.strMeal} {meal.count} <button className='delete-btn'onClick={()=>handleDelete()}>Delete</button></li>
                                )
                            }
                        </ul>
                    )
                }
        </div>
    );
};

export default OrderList;