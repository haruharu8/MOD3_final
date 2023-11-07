import React from 'react'
import ExpenseItem from '../expenseItem'

const ExpenseList = () => {
    const expenses = [
        {id: 1234,
        name: "Shopping",
        cost: 50,
        },
        {id: 555,
        name: "Holiday",
        cost: 10,
        }
    ]
  return (
    <ul className='list'>
        {expenses.map((expense) => (
            <ExpenseItem 
                id={expense.id}
                name={expense.name}
                cost={expense.cost} />
        ))}
    </ul>
  )
}

export default ExpenseList