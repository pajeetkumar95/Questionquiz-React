import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>
            <div className='qheader'> 
                <h1>Question Quiz</h1>
                <div className='qlist'>
                    <ul>
                        <Link to='./'><li>Home</li></Link>
                        <Link to=''><li>About</li></Link>
                        <Link to='./rejister'><li>Register</li></Link>
                        {/* <Link to='/score'>Score</Link> */}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header