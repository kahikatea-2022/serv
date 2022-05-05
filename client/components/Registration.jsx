import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addUser } from '../apis/users'

function Registration() {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const [userType, setUserType] = useState('')

  const [form, setForm] = useState({
    auth0Id: '',
    name: '',
    email: '',
  })

  useEffect(() => {
    setForm({
      auth0Id: user.auth0Id,
      name: user.name,
      email: user.email,
    })
  }, [user])

  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  async function handleAddCustomer(e) {
    e.preventDefault()
    // registerUser(form, authUser, history.push)
    console.log(form)
    // try {
    //   await addUser(form)
    //   navigate('/')
    // } catch (error) {
    //   console.error(error)
    // }
  }

  async function handleAddBusiness(e) {
    e.preventDefault()
    // registerUser(form, authUser, history.push)
    console.log(form)
    // try {
    //   await addUser(form)
    //   navigate('/')
    // } catch (error) {
    //   console.error(error)
    // }
  }

  const handleSetUserTypeCustomer = () => {
    setUserType('customer')
  }

  const handleSetUserTypeBusiness = () => {
    setUserType('business')
  }

  return (
    <>
      <h2>Welcome to Serv.</h2>
      <h3>Select what type of user you are..</h3>
      <div className="user-type">
        <button className="customer-btn" onClick={handleSetUserTypeCustomer}>
          I am a customer
        </button>
        <button className="business-btn" onClick={handleSetUserTypeBusiness}>
          I am a service provider
        </button>
      </div>
      {userType === 'customer' && (
        <form onSubmit={handleAddCustomer}>
          <h3>Customer</h3>
          <div className="input-group">
            <input
              name="auth0Id"
              value={form.auth0Id}
              onChange={handleChange}
              type="hidden"
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              disabled={true}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled={true}
            />
          </div>
          <button>Register as Customer</button>
        </form>
      )}
      {userType === 'business' && (
        <form onSubmit={handleAddBusiness}>
          <h3>Business</h3>
          <div className="input-group">
            <input
              name="auth0Id"
              value={form.auth0Id}
              onChange={handleChange}
              type="hidden"
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              value={form.name}
              id="name"
              onChange={handleChange}
              disabled={true}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={form.email}
              id="email"
              onChange={handleChange}
              disabled={true}
            />
          </div>
          <h3>Tell your customers about your business!</h3>
          <div className="input-group">
            <label htmlFor="businessName">Business Name</label>
            <input
              name="businessName"
              id="businessName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="website">Website Link</label>
            <input name="website" id="website" onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="category">Business Category</label>
            <select name="category" id="category">
              <option value="">Plumbing</option>
              <option value="">Gardening</option>
              <option value="">Building</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="logo">Logo</label>
            <input type="file" name="logo" id="logo" onChange={handleChange} />
          </div>
          <div className="input-group">
            <button>Register as Business</button>
          </div>
        </form>
      )}
    </>
    // <section className="form">
    //   <h2>Register Profile</h2>
    //   <form className="registration">
    //     <label htmlFor="auth0Id">auth0Id</label>
    //     <input
    //       name="auth0Id"
    //       value={form.auth0Id}
    //       onChange={handleChange}
    //       disabled={true}
    //     ></input>

    // <label htmlFor="name">Name</label>
    // <input
    //   name="name"
    //   value={form.name}
    //   onChange={handleChange}
    //   disabled={true}
    // ></input>

    // <label htmlFor="email">Email</label>
    // <input
    //   name="email"
    //   value={form.email}
    //   onChange={handleChange}
    //   disabled={true}
    // ></input>

    //     <label htmlFor="description">Description</label>
    //     <textarea
    //       name="description"
    //       value={form.description}
    //       onChange={handleChange}
    //       cols={3}
    //     ></textarea>
    //     <button type="button" onClick={handleClick}>
    //       Register
    //     </button>
    //   </form>
    // </section>
  )
}

export default Registration
