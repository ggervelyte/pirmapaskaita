import { useNavigate } from "react-router-dom";

function SingleUser({users}) {
 
  const nav = useNavigate()

    function navi() {
      nav('/profile/'+users.username,{state:{
        name:users.username,
        image: users.image
      }});
    }

  return (
    <main className='user-section' >
        <div>
          <img src={users.image} alt="" />
        </div>
        <div>
            <h3>Username: {users.username}</h3>
            <button className='view-btn' onClick={navi} >View profile</button>
        </div>
    </main>
  )
}

export default SingleUser
