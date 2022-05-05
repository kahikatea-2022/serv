import React from 'react'

function JobsListItem(props) {
  const jobs = props.jobs

  function showDetails() {
    props.showDetails()
  }

  return (
    <div className="jobs">
      <p className="description">{jobs.description}</p>
      <p className="image">{jobs.image}</p>
      <p className="category">{jobs.category}</p>
      <p className="priceMin">{jobs.priceMin}</p>
      <p className="priceMax">{jobs.priceMax}</p>
      <p className="status">{jobs.status}</p>
      <p>
        <button onClick={showDetails}>
          Details
        </button>
      </p>
    </div>
  )
}

export default JobsListItem
