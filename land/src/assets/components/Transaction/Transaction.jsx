import './Transaction.css'
import React from 'react'
import{useState,useEffect} from 'react';
import {ethers} from 'ethers';

const Transactions = ({state}) => {
  const [transactions,setTransactions]= useState([]);
  const {contract} = state;
  useEffect(()=>{
    async function getTransactionHistory(){
        const transactions = await state.contract.getTransactionHistory(0);

      console.log("Transactions retrieved successfully");
      console.log(transactions);
      setLands(transactions);
     }
     contract && getTransactionHistory();
  },[contract]);
   
  return (
    <div>
       <div> transactions div </div>
    </div>
  )
}

export default Transactions
