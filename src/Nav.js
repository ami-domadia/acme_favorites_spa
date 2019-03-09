import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div id='navbar' className='row'>
            <Link to='/users' className='nav-link'>Users</Link>
            <Link to='/things' className='nav-link'>Things</Link>
        </div>
    )
}

export default Nav