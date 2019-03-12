import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({location, usercount, thingcount}) => {
    const pathname = location.pathname
    console.log('location is',location)
    console.log(usercount)
    const links = [
        {
            link: '/users',
            count: usercount
        },
        {
            link: '/things',
            count: thingcount
        }
    ]
    const counts = [
        usercount, 
        thingcount
    ]
    return (
        <ul className='nav nav-tabs'>
            {links.map((obj)=>(
                <li key={obj.link}>
                {console.log('I am in nav', obj.link)}
                 <Link to={obj.link} className={`nav-link ${obj.link.startsWith(pathname) ? 'active': ''}`}>{obj.link.slice(1)} {obj.count}</Link>
                </li>
            ))} 
        </ul>
    )
}

export default Nav