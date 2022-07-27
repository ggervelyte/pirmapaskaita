import React from 'react'
import {useSelector } from 'react-redux';

function Msgs({user}) {
 
  return (
    <div>
      <p>{user.message}</p>
    </div>
  )
}

export default Msgs
