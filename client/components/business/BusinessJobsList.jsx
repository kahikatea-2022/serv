import React from 'react'

function BusinessJobsList() {
  const jobListing = [
    {
      id: 1,
      user_id: 1,
      description:
        'My roof has been leaking for 3 days. It appears to be from a crack in some of the tiles.',
      image: 'multer image string placeholder',
      category: 'construction',
      price_min: '500',
      price_max: '1000',
      date_added: '2022-05-04T21:15:34.334Z',
      status: 'open',
    },
    {
      id: 2,
      user_id: 1,
      description: 'Looking for a contractor to mow my lawn every two weeks.',
      image: 'multer image string placeholder',
      category: 'gardening',
      price_min: '20',
      price_max: '40',
      date_added: '2022-03-04T21:14:34.334Z',
      status: 'in progress',
    },
    {
      id: 3,
      user_id: 2,
      description: 'Office is moving, needs a deep clean (3-4 days work).',
      image: 'multer image string placeholder',
      category: 'cleaning',
      price_min: '900',
      price_max: '2000',
      date_added: '2022-02-01T21:15:34.334Z',
      status: 'closed',
    },
  ]

  return (
    <div>
      <h1>Customer Quotes</h1>
      <section>
        {jobListing.map((jobListing) => {
          console.log(jobListing)
          return <BusJobItem key={jobListing.id} jobListing={jobListing} />
        })}
      </section>
    </div>
  )
}

export default BusinessJobsList
