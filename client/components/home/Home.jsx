import React from 'react'

function Home() {
  return (
    <div>
      <h1>Serv.</h1>
      {/* <p>
        Need a plumber? A gardener? A roofer? Your search is over. Just describe
        your job, then get quotes from local businesses.
      </p> */}
      <div className="info-buttons">
        <button className="how-it-works">How it Works</button>
        <button className="services">Services</button>
      </div>
    </div>
  )
}

export default Home
