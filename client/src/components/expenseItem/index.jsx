import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
  return (
    
        <li className ='flex justify-between align-middle' >
            {props.name}
            <div>
                <span className='badge-primary mr-3 '>
                    ${props.cost}
                </span>
                <TiDelete size='1.5em'> </TiDelete>
            </div>
        </li>
  )
}

export default ExpenseItem