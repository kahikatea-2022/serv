import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { APIgetBusinessById, APIgetReviews } from '../../apis/business'

function BusinessInfo({ children }) {
  const { businessId } = useParams()

  const [business, setBusiness] = useState({})
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    APIgetBusinessById(businessId)
      .then((data) => {
        setBusiness(data)
      })
      .catch(() => null)
  }, [])

  useEffect(() => {
    APIgetReviews(Number(businessId))
      .then((data) => {
        const reviewData = data.filter((obj) => obj.review !== '')
        console.log('reviews: ', reviewData)
        setReviews(reviewData)
      })
      .catch(() => null)
  }, [])

  const {
    businessName,
    website,
    category,
    logo,
    location,
    averageRating,
    ratingCount,
  } = business

  return (
    <div className="container mt-3">
      <h2 className="text-success mb-3">Business Information</h2>
      {children} {/* This holds the WaitIndicator (from App) */}
      <div className="card my-2 p-4 col-xl-6">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">
<<<<<<< HEAD
                <img src={logo} alt="N/A" className="w-25 mx-5" />
||||||| 59708b2
                <img src={logo} alt="Job illustration" className="w-25 mx-5" />
=======
                <img src={logo} alt="Business logo" className="w-25 mx-5" />
>>>>>>> 444d34b21a7dac843a50cf0cf0e3362178cc2d49
              </th>
              <td></td>
            </tr>
            <tr>
              <th scope="row" className="w-50">
                Business Name
              </th>
              <td className="text">{businessName}</td>
            </tr>
            <tr>
              <th scope="row">Category</th>
              <td className="text">{category}</td>
            </tr>
            <tr>
              <th scope="row">Website</th>
              <td>
                <a href={website}>{website}</a>
              </td>
            </tr>
            <tr>
              <th scope="row">Address </th>
              <td>{location}</td>
            </tr>
            <tr>
              <th scope="row">Rating </th>
              <td>
                {averageRating?.toFixed(2)} ({ratingCount} ratings)
              </td>
            </tr>
            <tr>
              <th scope="row">Average Reviews </th>
              <td>
                {averageRating?.toFixed(2)} ({ratingCount} ratings)
              </td>
            </tr>
          </tbody>
        </table>
        <div className="card my-2 p-4 col-xl-12">
          <table className="table">
            <tbody>
              {reviews.map((obj, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">Review </th>
                    <td>{obj.review}</td>
                    <td>Rating: {obj.rating}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BusinessInfo
