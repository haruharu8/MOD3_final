import './App.css'
import AddExpense from './components/addExpense'
import Budget from './components/budget'
import ExpenseItem from './components/expenseItem'
import ExpenseList from './components/expenseList'
import Remaining from './components/remaining'
import Spent from './components/spent'
import { AppProvider } from './context/appContext'

function App() {

  return (
    <AppProvider>
      
        <h1 className="text-3xl font-bold underline">
        Free Budget Tracker 
        </h1>
        <div className='container'>
          <div className="flex-auto">
            <div className="m-3">
              <div className="columns-1 mb-1">
                <Budget />
              </div>
              <div className="columns-1 mb-1">
                <Remaining />
              </div>
              <div className="columns-1 mb-1">
                <Spent />
              </div>
                <h3 className='mt-3'>Expenses</h3>
                <div className='flex mt-3'>
                  <div className='columns-1'>
                    <ExpenseItem />
                  </div>
                </div>
                <h3 className= "text-3xl font-bold underline">Add Expense</h3>
                <div className='mt-3'>
                  <div className='col-span-1'>
                    <AddExpense />
                  </div>
                </div>
                <ExpenseList />
            </div>
          </div>
        </div>
      
    </AppProvider>
  )
}

export default App
