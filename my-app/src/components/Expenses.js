import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from './Cards';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        < ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;