import React, { useEffect } from 'react'
import QuotesItem from './QuotesItem'
import { useSelector } from 'react-redux'

// import { APIgetJobQuotes } from '../../apis/quotes'

function QuotesList() {

  // const quotes = useSelector((state) => state.quotes)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchQuotes())
  // }, [])
  // the data is hardcoded at the moment.t 
  // need related user_id and job_id from 

  const quotes = [
    {
      id: 1,
      user_id: 1,
      job_id: 2,
      price: 500,
      date_added: '2022-05-04T21:15:34.334Z',
      notes: 'We can do it for 500 if its quick',
      status: 'pending',
    },
    {
      id: 2,
      user_id: 1,
      job_id: 2,
      price: 500,
      date_added: '2022-05-04T21:15:34.334Z',
      notes: 'We can do it for 500 if its quick',
      status: 'pending',
    },
    {
      id: 3,
      user_id: 1,
      job_id: 2,
      price: 500,
      date_added: '2022-05-04T21:15:34.334Z',
      notes: 'We can do it for 500 if its quick',
      status: 'pending',
    }
  ]


  return (
    <div>
      <h1>Customer Quotes</h1>
      <section>
        {quotes.map((quote) => {
          console.log(quote)
          return <QuotesItem key={quote.id} quote={quote} />

        }
        )}

      </section>
    </div>
  )
}

export default QuotesList
