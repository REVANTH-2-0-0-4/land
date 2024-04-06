import './BuyLand.css'
import React, { useState } from 'react'
import { ethers } from 'ethers';

const BuyLand = ({ state }) => {
  const [valueWei, setValueWei] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const buyLand = async (event) => {
    event.preventDefault();
    const id = document.querySelector(".id").value;
    const message = document.querySelector(".message").value;
    const price = document.querySelector(".price").value;

    try {
      // Convert price to Wei
      const valueWei = ethers.parseEther(price);

      const tx = await state.contract.buyLand(id, message, {
        value: valueWei
      });
      await tx.wait();
      alert("LAND BOUGHT SUCCESSFULLY !");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Error occurred while buying land. Please check console for details.");
    }
  }

  return (
    <div className='BuyLand'>
      <h2 className='heading'> BUY LAND </h2>
      <form>
        <input type='number' className='id' placeholder='ENTER  THE LAND ID'></input>
        <input type='text' className='message' placeholder='MESSAGE '></input>
        <input type='text' className='price' placeholder='PRICE'></input>
        <button className='button' onClick={buyLand}>CONFIRM PURCHASE</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <a href="/" className='backtohome3'>  BACK TO HOME <i className="fa-solid fa-house"></i> </a>
    </div>
  )
}

export default BuyLand; // Ensure this is the only default export in the file