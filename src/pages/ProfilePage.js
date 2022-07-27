import React from 'react'
import {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateImage, updatePassword } from '../features/users'
import Toolbar from '../components/Toolbar'

function ProfilePage() {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.users.value)
  const imgRef = useRef()
  const pwdRef = useRef()

  function setImg() {
    const image = imgRef.current.value
    const username = userInfo.currentUser.username
    const getIndex = userInfo.allUsr.findIndex(x => x.username === username)

    let updateImg = {...userInfo.currentUser}
    updateImg.image = image

    dispatch(updateImage({
      index: getIndex,
      current: updateImg
    }))

  }

  function setPwd() {
      const username = userInfo.currentUser.username 
      const newPwd = pwdRef.current.value 
      const getIndex = userInfo.allUsr.findIndex(x => x.username === username)

      let pwdUpdate = {...userInfo.currentUser}
      pwdUpdate.password = newPwd

      dispatch(updatePassword({
        index: getIndex,
        current: pwdUpdate
      }))
  }

  return (
   <>
    <Toolbar/>
      <section className='profile-section'>
        <div className='prof-img'>
          <img src={userInfo.currentUser.image} alt="" />
        </div>
        <div className='prof-info'>
          <div className='change-info'>
          <h1>Username: {userInfo.currentUser.username}</h1>
            <h4>Change profile picture</h4>
            <input ref={imgRef} type="url" placeholder='Img url' />
            <button onClick={setImg}>Change image</button>
            <h4>Change profile password</h4>
            <input ref={pwdRef} type="text" placeholder='Type new password'/>
            <button onClick={setPwd}>Change password</button>
          </div>
        </div>
      </section>  
   </>
      
   
  )
}

export default ProfilePage
