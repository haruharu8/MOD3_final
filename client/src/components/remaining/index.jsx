import React, { useContext} from 'react'
import { AppContext } from '../../context/appContext'

const Remaining = () => {

    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0 );

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (

    <div className={ `alert ${alertType}` }>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Remaining: ${budget - totalExpenses} </span>
  </div>
  )
}

export default Remaining