import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <div>
        <li><Link to="/postpage/1">Post 1</Link></li>
      <br></br>
      <li><Link to="/postpage/2">Post 2</Link></li>
          <br></br>
          <li><Link to="/postpage/3">Post 3</Link></li>
          <br></br>
          <li><Link to="/postpage/newpost">Newpost</Link></li>
          <Outlet />
    </div>
  )
}

export default PageLayout