import React from 'react'
import { useNavigate } from "react-router-dom";

function Logo() {
    const homePg = useNavigate()

    function homePage() {
        homePg('/')
    }

  return (
     <div className='landing-img'>
            <img src="https://d7ya3krmkxqty.cloudfront.net/blog/lineage-2-classic-classes.jpg.webp" alt="logo" onClick={homePage}/>
    </div>
  )
}

export default Logo
