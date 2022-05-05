import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container flex flex-row flex-justify-center">
        <p className="colophon">
          &copy; Copyright {new Date().getFullYear()} - Serv{' '}
        </p>
      </div>
    </footer>
  )
}

export default Footer
