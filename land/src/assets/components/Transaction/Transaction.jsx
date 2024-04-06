import './Transaction.css';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const Transactions = ({ state }) => {
  const [transactions, setTransactions] = useState([]);
  const { contract } = state;

  useEffect(() => {
    async function getTransactionHistory() {
      try {
        const allTransactions = await state.contract.getAllTransactions();
        console.log("Transactions retrieved successfully");
        console.log(allTransactions);
        setTransactions(allTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    }

    contract && getTransactionHistory();
  }, [contract]);

  return (
    <div>
      <h2>All Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <p>From: {transaction.from}</p>
            <p>To: {transaction.to}</p>
            <p>Message: {transaction.message}</p>
            <p>Land ID: {transaction.landId.toString()}</p>
          </li>
        ))}
      </ul>
      <a href="/" className='backtohome2'>BACK TO HOME <i className="fa-solid fa-house"></i></a>
    </div>
  );
}

export default Transactions;