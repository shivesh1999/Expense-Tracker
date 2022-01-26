import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import React,{useState} from 'react';
import Heading from './components/Heading';
import './App.css';

const dummy_expenses=[
  // {id:'e1', title: 'Car insurance', amount: 13500 ,date: new Date(2021,2,30)},
  // {id:'e2', title: 'food', amount: 500 ,date: new Date(2021,3,23)},
  // {id:'e3', title: 'cab', amount: 130 ,date: new Date(2021,4,3)},
];

function App() {
 
  const[expenses,setExpenses]=useState(dummy_expenses);


  const addExpenseHandler= expense =>{
    setExpenses(prevExpenses => {
      return[expense,...prevExpenses];
    });
  };

return (
  <div>
    <Heading></Heading>
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />
  </div>
);
}

export default App;
