import React from 'react'
import {useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from '../features/users';


function LoginPage() {
    const [isError, setIsError] = useState(false)
    const allUsr = useSelector(state => state.users.value.allUsr)
    const dispatch = useDispatch()
    const username = useRef()
    const pass = useRef()
    const nav = useNavigate()
    

    function log() {
        const user = {
            username: username.current.value,
            password: pass.current.value
        }
        
        const findUser = allUsr.find(x => x.username === user.username && x.password === user.password)

        if(!findUser) return setIsError('User does not exist')
        dispatch(getCurrentUser(findUser))
        nav('/profile')

    }

  return ( 
    <>
        <section className='reg-section'>
            <div className='reg-form'>
                <input ref={username} type="text" placeholder='Username' autoComplete='off'/>
                <input ref={pass} type="password" placeholder='Password' autoComplete='off'/>
                {isError && <div className='error-text'>{isError}</div> }
                <button className='btn2' onClick={log} >Login</button>
            </div>        
        </section>
    
    </>
  )
}

export default LoginPage
