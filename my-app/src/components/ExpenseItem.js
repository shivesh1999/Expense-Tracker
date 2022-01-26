import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Cards from './Cards';
import './ExpenseItem.css';
function ExpenseItem(props){
    return(
        <Cards className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                <div className='expense-item__price'>
                    {props.amount}Rs
                </div>
            </div>
        </Cards>
    );
}

export default ExpenseItem;