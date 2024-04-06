import React from "react";
import './HomePage.css'
import img1 from '../../../assets/photos/image1.jpg';
import img2 from '../../../assets/photos/image2.png';
import img3 from '../../../assets/photos/img3.jpg';
import img4 from '../../../assets/photos/image4.jpg';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="outer">
      <div className="header">
        
      <nav className="nav">
        <span className="search_icon"> <i class="fa-solid fa-magnifying-glass"></i></span>
        <a href="/AddLand" className="nav-link"> Add Lands</a>
        <a href="Transaction" className="nav-link">View Transaction history</a>
        <a href="/buyLand" className="nav-link">BUY LAND</a>
        <a href="/lands " className="nav-link">Get Lands</a>
      </nav>
      <a href="#" className="btn btn-primary">Sign Up</a>
    </div>
    <div className="page1">
    
                <h2 className="ques"> HOW DOES THE LAND REGISTRY WORK ? </h2>
                <div className="one_one">
                    <h2 className="essential">ESSENTIAL FEATURES FOR USER</h2>
                    <p className="description">As a user, easily search for lands and track transactions. Add new entries to the registry hassle-free.</p>
                    <a href="Transaction" className="btn btn-primary " id="discovermore">DISCOVER MORE</a> 
                    <img src={img1} alt="Description of the image"  className="image1"/>
                </div>
                
    </div>
     <div className="pagetwo">
          <img src={img2} alt="Description of the image"  className="image2"/>
          <div className="two_one">
              <div className="heading_2"> LAND REGISTRY AND LAND</div>
              <p>LandRegistryPro is the go-to platform for managing land projects. It offers a secure, transparent, and efficient way to handle all land-related tasks.</p>
              <a href="#" className="btn btn-primary " id="exploremore">Start Exploring</a> 
      
     </div>
     </div>
     <div className="pagethree">
        
              <img src={img3} alt="Description of the image"  className="image3"/>
               <div className="three_one">
              <div className="heading_2"> Transforming land project management</div>
              <p>LandRegistryPro streamlines land project processes, enhancing value creation for users throughout the project lifecycle..</p>
              <a href="#" className="btn btn-primary " id="learnmore">Learn More</a> 

    </div>
    </div>
    <div className="page4">

    <img src={img4} alt="Description of the image"  className="image4"/>
    <div className="four_one">
              <div className="heading_2">Efficient and intelligent transactions</div>
              <p>Discover how LandRegistryPro's technology optimizes land transaction data, leading to improved efficiency and transparency in land management..</p>
              <a href="#" className="btn btn-primary " id="exploreourplatform">Explore Our Platform</a> 
      
      
     </div>
     <div className="footer">
              <div className="footer1">
             LAND REGISTRY
             <div> EMPOWERING LAND </div>
             <div className="icons"><i class="fa-brands fa-square-instagram"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-square-x-twitter"></i></div>
              </div>
             <div className="footer2">
                
                    <div className="footer21">
                     <ul className="footer21ul">
                        <li>search</li>
                        <li>transactions</li>
                        <li>case studies</li>
                        <li>careers</li>
                        <li>contact us</li>
                     </ul>
                    </div>
                    <div className="footer22">
                    <ul className="footer21ul">
                     <li> privacy policy </li>
                     <li> terms of service</li>
                     <li> Copyright Information</li>

                 </ul>
                    </div>
             </div>
     </div>
    
    </div>
    

    </div>
   
  )
}

export default HomePage
