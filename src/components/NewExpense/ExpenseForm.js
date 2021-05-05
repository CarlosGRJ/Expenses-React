// import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

import './ExpenseForm.css';

export const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
   // const [enteredTitle, setEnteredTitle] = useState('');
   // const [enteredAmount, setEnteredAmount] = useState('');
   // const [enteredDate, setEnteredDate] = useState('');

   // const [userInput, setUserInput] = useState({
   //    enteredTitle: '',
   //    enteredAmount: '',
   //    enteredDate: '',
   // });

   //use Form De Fernando Herrera mejorado
   const [formValues, handleInputChange, reset] = useForm({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
   });

   const { enteredTitle, enteredAmount, enteredDate } = formValues;

   // const titleChangeHandler = (event) => {
   //    // setEnteredTitle(event.target.value);
   //    // setUserInput({
   //    //    ...userInput,
   //    //    enteredTitle: event.target.value,
   //    // });
   //    // better solution
   //    // setUserInput((prevState) => {
   //    //    console.log('prevState ', prevState);
   //    //    return { ...prevState, enteredTitle: event.target.value };
   //    // });
   // };

   // const amountChangeHandler = (event) => {
   //    // setEnteredAmount(event.target.value);
   //    // setUserInput({
   //    //    ...userInput,
   //    //    enteredAmount: event.target.value,
   //    // });
   // };

   // const dateChangeHandler = (event) => {
   //    // setEnteredDate(event.target.value);
   //    // setUserInput({
   //    //    ...userInput,
   //    //    enteredDate: event.target.value,
   //    // });
   // };

   const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
         title: enteredTitle,
         amount: enteredAmount,
         date: new Date(enteredDate),
      };

      onSaveExpenseData(expenseData);
      // setEnteredTitle('');
      // setEnteredAmount('');
      // setEnteredDate('');
      reset();
   };

   return (
      <form onSubmit={submitHandler}>
         <div className='new-expense__controls'>
            <div className='new-expense__control'>
               <label>Title</label>
               <input
                  type='text'
                  name='enteredTitle'
                  value={enteredTitle}
                  onChange={handleInputChange}
               />
            </div>
            <div className='new-expense__control'>
               <label>Amount</label>
               <input
                  type='number'
                  min='0.01'
                  step='0.01'
                  name='enteredAmount'
                  value={enteredAmount}
                  onChange={handleInputChange}
               />
            </div>
            <div className='new-expense__control'>
               <label>Date</label>
               <input
                  type='date'
                  min='2019-01-01'
                  max='2022-12-31'
                  name='enteredDate'
                  value={enteredDate}
                  onChange={handleInputChange}
               />
            </div>
         </div>

         <div className='new-expense__actions'>
            <button type='button' onClick={onCancel}>
               Cancel
            </button>
            <button type='submit'>Add Expense</button>
         </div>
      </form>
   );
};
