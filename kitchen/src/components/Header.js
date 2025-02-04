import React from 'react'
import {ImSpoonKnife} from 'react-icons/im';
// The code import {ImSpoonKnife} from 'react-icons/im'; 
// imports the ImSpoonKnife icon from the react-icons/im library. 
// This library provides a large number of icons that can be used in React applications. 
// To use an icon, you need to import it from the library and then render it in your component.

function Header() {
  return (
    <header className='header' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)` }}>
        <div className='layer'>
        <div className="container">
          <nav className='logo-wrapper'>
            <div className='logo'>
              <ImSpoonKnife className='brand' />
            </div>
          </nav>
          <div className='header-text' >
            <h1>Kitchen-सलाहकार</h1>
            <p>Let's have fun cooking...</p>
          </div>

        </div>
        </div>
      </header>
  )
}

export default Header