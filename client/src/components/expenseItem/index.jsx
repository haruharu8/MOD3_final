import React, { useContext} from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../../context/appContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })
    }
  return (
    
        <li className ='flex justify-between align-middle' >
            {props.name}
            <div>
                <span className='badge-primary mr-3 '>
                    ${props.cost}
                </span>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}> </TiDelete>
            </div>
        </li>
  )
}

export default ExpenseItem