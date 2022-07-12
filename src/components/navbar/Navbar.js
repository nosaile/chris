import React, {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {CgMenuRound} from 'react-icons/cg'
import './Navbar.css'


const Navbar= () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

  return (
    <div className='navbar'>
        <div className='container'>
            <h1 style={{marginLeft: '1rem', color: 'cyan'}}>chris.</h1>
            <ul className={click ? 'nav active' : 'nav'}>
                <li className='nav-item'>
                    <a className='btn' href="/">home</a>
                </li>
                <li className='nav-item'>
                    <a className='btn' href="#about">about</a>
                </li>
                <li className='nav-item'>
                    <a className='btn' href="/">projects</a>
                </li>
                <li className='nav-item'>
                    <a className='btn' href="/">contact</a>
                </li>
            </ul>
            <div onClick={handleClick} className='hamburger'>
                {click ? <AiOutlineClose className='icon' /> : <CgMenuRound className='icon'/>} 
            </div>

        </div>
    </div>
  )
}

export default Navbar