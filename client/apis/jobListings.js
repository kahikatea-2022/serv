import request from 'superagent'

// const rootUrl = '/api/v1'


//THIS IS INTENDED TO DISPLAY AN INDIVIDUAL CUSTOMER'S **OWN** JOB LISTINGS, NOT ALL THE JOB LISTINGS
export function getJobs() {
  // return request.get(rootUrl + '#').then((res) => {
  //   return res.body.users
  // })
  return Promise.resolve([
  { id: 1,
    description: 'Placeholder Description 1',
    image: 'URL 1',
    category: 'Category 1',
    priceMin: 'Min Price 1 Here',
    priceMax: 'Max Price 1 Here',
    status: 'open',

  },
  { id: 2,
    description: 'Placeholder Description 2',
    image: 'URL 2',
    category: 'Category 2',
    priceMin: 'Min Price 2 Here',
    priceMax: 'Max Price 2 Here',
    status: 'in progress'

  },
  { id: 3,
    description: 'Placeholder Description 3',
    image: 'URL 3',
    category: 'Category 3',
    priceMin: 'Min Price 3 Here',
    priceMax: 'Max Price 3 Here',
    status: 'closed'

  },


])
}


