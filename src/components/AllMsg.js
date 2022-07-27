import React from 'react'
import {useSelector } from 'react-redux';
import Msgs from './Msgs';

function AllMsg() {
    const allUsr = useSelector(state => state.users.value.messages)
  return (
    <div>
        {allUsr.map((x, i) => <Msgs key={i} user={x} /> )}
    </div>
  )
}

export default AllMsg
