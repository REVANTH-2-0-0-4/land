// import { useState,useEffect } from 'react'
// import { ethers } from 'ethers';
// import abi from './assets/contractJson/land.json';
// import AddLand from './assets/components/Addland';
// import Lands from './assets/components/Lands/Lands';
// import Transaction from './assets/components/Transaction/Transaction';
// import BuyLand from './assets/components/BuyLand/BuyLand';
// import HomePage from './assets/components/HomePAge/HomePage';
// import { createBrowserRouter,RouterProvider} from 'react-router-dom';


// import './App.css'

// function App() {
//   const router =createBrowserRouter([{
//       path: '/',
//       element: <HomePage></HomePage>,
//   }]);
//   const [account, setAccount] = useState("not connected");
//   const [state, setState] = useState({
//     provider: null,
//     signer: null,
//     contract: null
//   });
//   useEffect(() => {
//     const template = async () => {
//       try {
//         const contractAddress = "0x0704e2e584fff7630d41d55929b899eea5fd032e";
//         const contractABI = abi.abi;

//         const { ethereum } = window;
//         if (ethereum) {
//           const account = await ethereum.request({
//             method: 'eth_requestAccounts'
//           });
//           setAccount(account); 
//           let  provider = new ethers.BrowserProvider(ethereum);
//            const signer =  await provider.getSigner();
//           const contract = new ethers.Contract(
//             contractAddress,
//             contractABI,
//             signer
//           );
//           setState({ provider, signer, contract });
//           console.log(contract);
//         } else {
//           console.log('MetaMask not detected');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     template();
//   }, []);


//   return (
//     < div className='App'>
//       <RouterProvider router={router}></RouterProvider>
//          {/* <div className='account'>Account connected: {account}</div>  */}
//        <HomePage></HomePage> 
//            {/* <AddLand state={state}></AddLand>  */}
//    {/* <Lands state={state}> </Lands> */}
//    {/* <Transaction state={state}> </Transaction> */}
//    {/* <BuyLand state={state}></BuyLand> */}
   
     
//     </div>
//   )
// }

// export default App
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from './assets/contractJson/land.json';
import AddLand from './assets/components/Addland';
import Lands from './assets/components/Lands/Lands';
import Transaction from './assets/components/Transaction/Transaction';
import BuyLand from './assets/components/BuyLand/BuyLand';
import HomePage from './assets/components/HomePAge/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  const [account, setAccount] = useState("not connected");
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  useEffect(() => {
    const template = async () => {
      try {
        const contractAddress = "0x0704e2e584fff7630d41d55929b899eea5fd032e";
        const contractABI = abi.abi;

        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: 'eth_requestAccounts'
          });
          setAccount(account); 
          let provider = new ethers.BrowserProvider(ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setState({ provider, signer, contract });
          console.log(contract);
        } else {
          console.log('MetaMask not detected');
        }
      } catch (error) {
        console.error(error);
      }
    };
    template();
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Define other routes here */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
