// import React from 'react'
import './Lands.css'


// const Lands = ({state}) => {
//   async function getAllLands() {
//     try {
//         const lands = await state.contract.getAllLands();
//         // await lands.wait(); 
//         console.log('All Lands:', lands);
//         // Do something with the returned lands array
//     } catch (error) {
//         console.error('Error getting all lands:', error);
//     }
// }
//   return (
//     <div className='Lands'>
//        <button onClick={getAllLands}> GET LANDS</button>
//       {
//         lands.map((el,idx)=>{
//           <div key={idx}>
//             <div> {el.id}</div>
//           </div>
//         })
//       }
//     </div>
//   )
// }

// export default Lands;
import React from 'react'
import {ethers} from 'ethers'; 
// import './Memos.css'
 import{useState,useEffect} from 'react';

const  Lands = ({state}) => {
  const [lands,setLands]= useState([]);
  const {contract} = state;
  useEffect(()=>{
    async function getAllLands(){
        const lands = await state.contract.getAllLands();

      console.log("lands retrieved successfully");
      console.log(lands);
      setLands(lands);
     }
     contract && getAllLands();
  },[contract]);
   
     return (
       <div className=' puradiv'>
      {/* <button onClick={getAllLands} >GET ALL LANDS</button> */}
      {/* <div className='Lands'>
             <span className='id'>id</span>
            <span className='location'>location</span>
            <span className='from'>FROM</span>
            <span className='area'>area</span>
            <span className='price'>price</span>
      </div> */}
      {lands.map((el,idx)=>{
        return <div key={idx} className='lands'>
          <span className='landnumber'> LAND NUMBER  : {ethers.formatUnits(el.uniqueId, "wei")}</span>
          <span className='id'>  LAND ID : {ethers.formatUnits(el.uniqueId, "wei")}</span>
            <span className='location'> LAND LOCATION : {el.location}</span> 
            <span className='from'> LAND OWNER : {el.owner}</span>
            <span className='area'> LAND AREA : {ethers.formatUnits(el.area, "wei")} sqft</span>
            <span className='price'> LAND PRICE :{ethers.formatUnits(el.price, "wei")}</span>
            <button className='buyland'> BUY LAND</button>
          </div>
      })}
        <a href="/" className='backtohome'>  BACK TO HOME <i class="fa-solid fa-house"></i> </a>

    </div>
  )
}

export default Lands;
