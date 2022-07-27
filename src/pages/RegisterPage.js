import React from 'react'
import {useRef, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { addUser } from '../features/users'

function RegisterPage() {
    const userInfo = useSelector(state => state.users.value.allUsr)
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch()
    const userName = useRef()
    const pass1 = useRef()
    const pass2 = useRef()
    const nav = useNavigate()
    
    function reg() {
        const newUser = {
            username: userName.current.value, 
            password1: pass1.current.value,
            password2: pass2.current.value,
            image: "https://images.unsplash.com/photo-1658752292290-48f675c977d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        }

        if(newUser.username.length <= 3 || newUser.username.length > 20) {
            return setIsError('Please lengthen this username to 4 characters or more, but not higher than 20 characters')
        } else {
            setIsError(false)
        }

        if(newUser.password1 !== newUser.password2) {
            return setIsError('Passwords do NOT match!')
        } else {
            setIsError(false)
        }

        if(newUser.password1.length <= 3) {
            return setIsError('Please lengthen this password to 4 characters or more, but not higher than 20 characters')
        } else {
            setIsError(false)
        }


        const find = userInfo.find(x => x.username === newUser.username)
        if(find) return setIsError('Username already exists')

        dispatch(addUser(newUser))
        nav('/login')
        // console.log(newUser)
    }

  return (
    <>
        <section className='reg-section'>
            <div className='reg-form'>
                <input ref={userName} type="text" placeholder='Username' autoComplete='off'/>
                <input ref={pass1} type="password" placeholder='Password' />
                <input ref={pass2} type="password" placeholder='Confirm password' />
                {isError && <div className='error-text'>{isError}</div> }
                <button className='btn2' onClick={reg}>Register</button>
            </div>
            
        </section>
    </>
  )
}

export default RegisterPage
