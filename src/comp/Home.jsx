import React from 'react'
import Contents from './Contents'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <main>
      <div className='H_title'>
          
        <div className='H_main'>
            <h1>안녕하세요,</h1>
            <div className='H_titleMain'>
                <div>고민하며 성장하는</div>
                <div className='H_name'>이현주입니다.</div>
            </div>
        </div>

        <figure className='H_link'>
          <NavLink to="/about"><b>About</b>  <img src='arrow_R.png'></img></NavLink>
          <NavLink to="/project"><b>Project</b>  <img src='arrow_R.png'></img></NavLink>
        </figure>

      </div>

      <Contents />
    </main>
  )
}

export default Home