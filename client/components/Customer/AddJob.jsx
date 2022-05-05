import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function AddJob() {
  const userId = useSelector((state) => state.user.userId)
  const [inputs, setInputs] = useState({ userId })

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
  }
  return (
    <div>
      <h3>Get Your Job Taken Care Of!</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            name="description"
            placeholder="What can we help you with?"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <h3>Budget Estimate</h3>
          $
          <input
            name="priceMin"
            type="number"
            min={0}
            onChange={handleChange}
            required
          />
          $
          <input
            name="priceMax"
            type="number"
            min={0}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="file"
            id="myImage"
            name="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="category"
            id="category"
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="plumbing">Plumbing</option>
            <option value="gardening">Gardening</option>
            <option value="building">Building</option>
          </select>
        </div>
        <div className="submit-buttons">
          <button className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddJob
