import './App.css'
import AddExpense from './components/addExpense'
import Budget from './components/budget'
import ExpenseItem from './components/expenseItem'
import ExpenseList from './components/expenseList'
import Remaining from './components/remaining'
import Spent from './components/spent'

function App() {

  return (
    <>
      
        <h1 className="text-3xl font-bold underline">
        Free Budget Tracker 
        </h1>
        <div className='container'>
          <div className="flex-auto">
            <div className="m-3">
              <div className="columns-1">
                <Budget />
              </div>
              <div className="columns-1">
                <Remaining />
              </div>
              <div className="columns-1">
                <Spent />
              </div>
                <h3 className='mt-3'>Expenses</h3>
                <div className='row mt-3'>
                  <div className='columns-1'>
                    <ExpenseItem />
                  </div>
                </div>

                <ExpenseList />
                <AddExpense />
            </div>
          </div>
          <h3 className= "text-3xl font-bold underline">Expenses</h3>
        </div>
      
    </>
  )
}

export default App
