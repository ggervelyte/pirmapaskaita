import React from 'react'
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const login = useNavigate()
    const register = useNavigate()

    function reg() {
        register('/register')
    }

    function log() {
      login('/login')
    }

  return (
    <main className='abc'> 
        <div className='land-pg-container'>
            <h1>Lineage 2 <span className='land-span'>users</span> chat app</h1>
          <div className='btns-container'>
            <button className='btn' onClick={log}>Login</button>
            <button className='btn' onClick={reg}>Register</button>
           </div>        
        </div>     
    </main>
  )
}

export default LandingPage
