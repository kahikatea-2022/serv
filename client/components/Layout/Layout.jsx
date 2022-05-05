import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="container flex flex-row">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
