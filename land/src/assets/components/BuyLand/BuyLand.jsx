import './BuyLand.css'
import React from 'react'

const BuyLand = ({state}) => {
  async function BuyLand (event) {
    event.preventDefault();
    const id = document.querySelector(".id");
    const message = document.querySelector(".message");
  
   
    const tx = await state.contract.BuyLand(id.value, message.value);
    await tx.wait();
    alert("LAND BOUGHT SUCCESSFULLY !");
  }
  return (
    <div className='BuyLand'>
    <h2 className='heading'> BUY LAND </h2>
    <form>
        <input type='number' className='id' placeholder='ENTER  THE LAND ID'></input>
        <input type='text' className='message' placeholder='MESSAGE '></input>
        <button className='button' onClick={BuyLand}>CONFIRM PURCHASE</button>
    </form>
    
</div>
  )
}

export default BuyLand
