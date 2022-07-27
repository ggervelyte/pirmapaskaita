import React from 'react'
import {useSelector, useDispatch } from 'react-redux';
import { deleteMsg, updateMessages } from '../features/users'

function Msgs({user, index}) {

  const msg = useSelector(state => state.users.value.messages)
  const dispatch = useDispatch()

  function remove() {
    if(msg.length >= 1) {
      const deleteMsg = msg.filter((x, i) => i != index)
      return dispatch(updateMessages(deleteMsg))
    }
    dispatch(deleteMsg(index))
  }
 
  return (
    <div>
      <div className='remove'>
        <p>{user.message}</p>
        <button onClick={remove} >Delete</button>
      </div>
    </div>
  )
}

export default Msgs
