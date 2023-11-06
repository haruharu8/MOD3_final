import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
  return (
    <ul className='w-96 flex justify-between items-center'>

        <li className ='w-full rounded-lg bg-primary-100 p-4 text-primary-600' >
            {props.name}
            <div>
                <span className='badge-primary mr-3 '>
                    ${props.cost}
                </span>
                    <TiDelete size='1.5em'> </TiDelete>
            </div>
        </li>
    </ul>
  )
}

export default ExpenseItem