import React from 'react'
import { useNavigate } from "react-router-dom";

function Toolbar() {
    const nav = useNavigate()

    function users() {
        nav('/allusers')
    }

    function profile() {
      nav('/profile')
    }

    function conversation() {
        nav('/conversations')
    }

  return (
    <div className='tool-b'>
      <button onClick={users}>All users</button>
      <button onClick={profile}>Profile</button>
      <button onClick={conversation}>Conversations</button>
    </div>
  )
}

export default Toolbar
