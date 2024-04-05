import './AddLand.css'
import React from 'react'

const AddLand = ({state}) => {
    async function AddLand (event) {
        event.preventDefault();
        const id = document.querySelector(".id");
        console.log(id.value);
        const location = document.querySelector(".location");
        const area = document.querySelector(".area");
        const price = document.querySelector(".price");
        const tx = await state.contract.addLand(id.value, location.value,area.value,price.value);
        await tx.wait();
        alert("LAND ADDED successfully!");
      }
  return (
    <div className='AddLand'>
        <h2 className='heading'> ADD LAND </h2>
        <form>
            <input type='number' className='id' placeholder='ENTER  THE LAND ID'></input>
            <input type='text' className='location' placeholder='LOCATION' ></input>
            <input type='number' className='area' placeholder='AREA'></input>
            <input type='number' className='price' placeholder=' ENTER THE PRICE IN WEI '></input>
            <button className='button' onClick={AddLand}>  ADD LAND FOR SALE</button>
        </form>
        
    </div>
  )
}

export default AddLand;
