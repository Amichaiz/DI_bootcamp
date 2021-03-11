import React from 'react';
import {NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <nav className='nav-wrapper red darken-3'>Navbar
       <div className='container'>
       <ul className='right' >
        <li><NavLink  to='/' style={{color:'#fff', margin:'10px'}} className="brand-logo">Home</NavLink></li>
        <li><NavLink  to='/About'style={{color:'#fff', margin:'10px'}} className="brand-logo">About</NavLink></li>
        <li><NavLink  to='/Contact'style={{color:'#fff', margin:'10px'}} className="brand-logo">Contact</NavLink></li>
       </ul>
       </div>
       </nav>       
        </>
       
    )
    }
    
    export default Navbar; 