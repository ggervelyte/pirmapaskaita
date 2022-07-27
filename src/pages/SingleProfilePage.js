import React from 'react'
import Toolbar from '../components/Toolbar';
import { useNavigate, useLocation } from "react-router-dom";


function SingleProfilePage() {
   const nav = useNavigate()
    const location = useLocation();

    function conversation() {
       nav('/conversations',{state:{
       name: location.state.name,
        image: location.state.image
      }});
    }
  
  return (
    <div>
        <Toolbar/>
      <main className='user-section-1'>
        <div>
          <img src={location.state.image} alt="" />
        </div>
        <div>
            <h3>Username: {location.state.name}</h3>
            <button className='view-btn' onClick={conversation}>Start conversation</button>
        </div>   
    </main>
    </div>
  )
}

export default SingleProfilePage
