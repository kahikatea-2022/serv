import React from 'react'

function QuotesItem(props) {
  console.log(props)
  
  const { id, user_id, job_id, notes, price } = props.quote
console.log(notes)
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <>
      <h1>Customer Quotes</h1>
      <section>
        <div className="flex quoteList-item"></div>
        <p key={id}>{user_id}</p>
        <p>{job_id}</p>
        <p>{notes}</p>
        <p>${price}</p>
        <button className="accept-btn" onClick={handleSubmit}>
          Accept
        </button>
        <button className="reject-btn" onClick={handleSubmit}>
          Reject
        </button>
      </section>
    </>
  )
}

export default QuotesItem
