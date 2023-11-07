import React, { useContext, useState } from 'react'

const AddExpense = () => {


  return (
    <>
        <form>
            <div className='row'>
                <div className='columns-1'>
                    <label for='name'>Name</label>
                    <input 
                    required='required' 
                    type='text' 
                    className ='form-control'>  
                    </input>
                </div>
                <div className='columns-1'>
                    <label for='cost'>Cost</label>
                    <input 
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'> 
                        </input>
                </div>
                <div>
                    <buttom type='submit' className='btn-primary'>
                        Save
                    </buttom>
                </div>
            </div>
        </form>
    </>
  )
}

export default AddExpense