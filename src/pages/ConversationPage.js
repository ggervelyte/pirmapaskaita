import React from 'react'
import Toolbar from '../components/Toolbar'
import {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addMsg} from '../features/users'
import AllMsg from '../components/AllMsg';


function ConversationPage() {
    const msgRef = useRef()
    const dispatch = useDispatch()
 
    function sendMsg() {
      const message = {
        message: msgRef.current.value
      }

        dispatch(addMsg(message))
        console.log(message)
    }
    
  return (
    <div>
        <Toolbar/>
      <div className='container'>
        <img src="https://image.shutterstock.com/image-vector/talk-bubble-speech-icon-blank-260nw-1415472902.jpg" alt="Avatar"/>
        
        <div className='chat'>
          <AllMsg></AllMsg> 
        </div> 
        
    </div>

    <input ref={msgRef} type="text" placeholder='Type your message'/>
    <button onClick={sendMsg}>Send</button>
</div>
  )
}

export default ConversationPage
