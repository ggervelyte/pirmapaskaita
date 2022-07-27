import {useSelector} from 'react-redux'
import SingleUser from './SingleUser'
import Toolbar from './Toolbar'

function UsersComp() {
  const allUsr = useSelector(state => state.users.value.allUsr)
 
  return (
    <>
    <Toolbar/>
    <section className='map-users'>
     {allUsr.map((x, i) => <SingleUser key={i} users={x} index={i} /> )}
    </section>
    </>

  )
}

export default UsersComp
