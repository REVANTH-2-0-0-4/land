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
          <header className="header">
      <nav className="nav">
        <span className="search_icon"> <i class="fa-solid fa-magnifying-glass"></i></span>
        <a href="#" className="nav-link"> Manage lands</a>
        <a href="#" className="nav-link">View history</a>
        <a href="#" className="nav-link">About us</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>
      <a href="/" className="btn btn-primary">Back to Home <i class="fa-solid fa-house"></i> </a>
    </header>
      
        <h2 className='heading'> ADD LAND </h2>
        <form className='formaddland'>
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
