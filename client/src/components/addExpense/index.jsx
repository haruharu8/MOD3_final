import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/appContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpense = () => {

const { dispatch } = useContext(AppContext);
const [name, setName] = useState('');
const [cost, useCost] = useState('');

const onSubmit = (event) => {
    e.preventDefault();
    
    const expense = {
        // id: uuidv4(),  this breaks my code
        name: name,
        cost: parseInt(cost),
    };

    dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
    });
};

  return (
    <>
        <form onSubmit = {onSubmit}>
            <div className='row'>
                <div className='columns-1'>
                    <label for='name'>Name</label>
                    <input 
                    required='required' 
                    type='text'
                    className ='form-control' 
                    id='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}>
                    </input>
                </div>
                <div className='columns-1'>
                    <label for='cost'>Cost</label>
                    <input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
                </div>
                <div>
                    <button type='submit' className='btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    </>
  )
}

export default AddExpense