import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'

function Header() {
  return (
    <header>
      <div className="container flex flex-align-center flex-justify-space-between">
        <Link to="/">
          <h1 className="logo">
            <img src="/serv-logo-dark.png" alt="Serv." />
          </h1>
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header
