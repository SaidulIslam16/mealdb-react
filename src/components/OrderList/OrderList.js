import React from 'react';
import './OrderList.css'

const OrderList = (props) => {
    return (
        <div className='ordered-list'>
            <h2>Order List</h2>
                {
                    props.selectedMeals.length>0 &&(
                        <ul>
                            {
                                props.selectedMeals.map(
                                    meal=><li>{meal.strMeal}</li>
                                )
                            }
                        </ul>
                    )
                }
        </div>
    );
};

export default OrderList;