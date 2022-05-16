import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { addUser } from '../actions/user'
import { convertToBase64 } from '../utils/convertImage'

function Registration() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const currentUser = useSelector((state) => state.currentUser)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    auth0Id: '',
    userName: '',
    email: '',
    description: '',
  })

  useEffect(() => {
    setForm({
      auth0Id: user.auth0Id,
      userName: user.name,
      email: user.email,
      description: user.description,
    })
  }, [user])

  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setForm({ ...form, logo: base64 })
  }

  // function handleAddCustomer(e) {
  //   e.preventDefault()
  //   dispatch(
  //     addUser(
  //       {
  //         ...form,
  //         type: 'customer',
  //       },
  //       navigate,
  //       '/customer'
  //     )
  //   )
  // }

  async function handleAddBusiness(e) {
    console.log('I am registering a business')
    console.log(form)
    e.preventDefault()

    dispatch(
      addUser(
        {
          ...form,
          type: 'business',
        },
        navigate,
        '/business'
      )
    )
  }

  const handleSetUserTypeCustomer = () => {
    // setUserType('customer')
    dispatch(
      addUser(
        {
          ...form,
          type: 'customer',
        },
        navigate,
        '/customer'
      )
    )
  }

  const handleSetUserTypeBusiness = () => {
    setUserType('business')
  }

  return (
    <div className="registration">
      <div className="container mt-3">
        <div className="row">
          {/* <div className="col"> */}
          {/* <div className="text-center"> */}
          {/* <h2 className="page-title text-success">Welcome to</h2> */}
          {/* </div> */}
          {/* <div className="hero-logo">
              <img src="/images/serv-logo-light.png" alt="Welcome to Serv" />
            </div> */}
          {/* </div> */}
          <div className="col ">
            <div className="d-flex flex-col align-items-center h-100 w-100 justify-content-center register">
              <div className="card text-center register-buttons">
                <h4 className="user-type-title mb-4 text-dark">
                  Select what type of user you are..
                </h4>
                <button
                  className="btn btn-outline-success btn-lg w-40 py-4 mx-2"
                  type="button"
                  onClick={handleSetUserTypeCustomer}
                >
                  Customer{' '}
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg w-40 py-4 mx-2"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  onClick={handleSetUserTypeBusiness}
                >
                  Service provider
                </button>
                {/* <button
                  className="btn btn-primary btn-lg w-40 py-4 mx-2"
                  type="button"
                  onClick={handleSetUserTypeBusiness}
                >
                  Service provider
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Button trigger modal --> */}

        {/* <!-- Modal --> */}
        <div
          className="modal"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          data-backdrop="false"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalLongTitle">
                  Enter Business Details
                </h5> */}
                <button
                  type="button"
                  className="close btn btn-outline-secondary"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Form Start */}
                {userType === 'business' && (
                  <form
                    onSubmit={handleAddBusiness}
                    className="flex flex-col col-9 w-100 "
                  >
                    <div className="card w-100 my-2 p-4">
                      <h3 className="business-details-title text-primary mb-3">
                        Business Details
                      </h3>
                      <div className="mb-3">
                        <input
                          name="auth0Id"
                          value={form.auth0Id}
                          type="hidden"
                        />
                        <input name="type" value="business" type="hidden" />
                      </div>
                      <div className="mb-3">
                        {/* <label htmlFor="user-name" className="form-label">
                          Username
                        </label> */}
                        <input
                          type="hidden"
                          className="form-control"
                          name="userName"
                          id="userName"
                          value={form.userName}
                          onChange={handleChange}
                          disabled={true}
                        />
                      </div>
                      <div className="mb-3">
                        {/* <label htmlFor="email-address" className="form-label">
                          Email address
                        </label> */}
                        <input
                          name="email"
                          id="emailAddress"
                          value={form.email}
                          type="hidden"
                          className="form-control"
                          onChange={handleChange}
                          disabled={true}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="business-name" className="form-label">
                          Business Name
                        </label>
                        <input
                          type="businessName"
                          className="form-control"
                          name="businessName"
                          id="businessName"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="website" className="form-label">
                          Website Link
                        </label>
                        <input
                          type="website"
                          className="form-control"
                          name="website"
                          id="website"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="location" className="form-label">
                          Location
                        </label>
                        <input
                          type="location"
                          className="form-control"
                          name="location"
                          id="location"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <select
                          defaultValue="default"
                          className="business-category form-select"
                          aria-label="Default select example"
                          name="category"
                          id="category"
                          required
                          onChange={handleChange}
                        >
                          <option value="default">Business Category</option>
                          <option value="plumbing">Plumbing</option>
                          <option value="gardening">Gardening</option>
                          <option value="building">Building</option>
                        </select>
                      </div>
                      <div className="input-group mb-3">
                        <label htmlFor="logo" className="input-group-text">
                          Logo
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          name="logo"
                          id="logo"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e)}
                        />
                      </div>
                      <div className="input-grou mb-3">
                        <img
                          src={form.logo}
                          alt=""
                          style={{ width: '100px' }}
                        />
                      </div>
                      <div className="input-group">
                        <button
                          type="submit"
                          className="btn btn-outline-primary"
                        >
                          Register as a Business
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
              {/* <div className="col ">
            <div className="d-flex flex-col align-items-center h-100 w-100 justify-content-center">
              <img
                src="/images/home.jpg"
                className="img-fluid"
                alt="home-image"
              />
            </div>
          </div> */}

              {/* Form End */}
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          {/* {userType === 'customer' && (
              <>
                <form
                  className="flex flex-col col-9 my-4 py-5"
                  onSubmit={handleAddCustomer}
                >
                  <div className="card w-100 my-2 p-4">
                    <h3 className="text-success mb-3">Customer</h3>
                    <div className="input-group">
                      <input
                        name="auth0Id"
                        value={form.auth0Id}
                        type="hidden"
                      />{' '}
                      <input name="type" value="customer" type="hidden" />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input
                        type="username"
                        className="form-control"
                        name="userName"
                        id="userName"
                        value={form.userName}
                        onChange={handleChange}
                        disabled={true}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        name="email"
                        id="emailAddress"
                        value={form.email}
                        type="email"
                        className="form-control"
                        onChange={handleChange}
                        disabled={true}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <button type="submit" className="btn btn-success">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </>
            )} */}
          {/* {userType === 'business' && (
              <form
                onSubmit={handleAddBusiness}
                className="flex flex-col col-9 my-4 py-5"
              >
                <div className="card w-100 my-2 p-4">
                  <h3 className="business-details-title text-success mb-3">
                    Business Details
                  </h3>
                  <div className="mb-3">
                    <input name="auth0Id" value={form.auth0Id} type="hidden" />
                    <input name="type" value="business" type="hidden" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">
                      Username
                    </label>
                    <input
                      type="userName"
                      className="form-control"
                      name="userName"
                      id="userName"
                      value={form.userName}
                      onChange={handleChange}
                      disabled={true}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email-address" className="form-label">
                      Email address
                    </label>
                    <input
                      name="email"
                      id="emailAddress"
                      value={form.email}
                      type="email"
                      className="form-control"
                      onChange={handleChange}
                      disabled={true}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="business-name" className="form-label">
                      Business Name
                    </label>
                    <input
                      type="businessName"
                      className="form-control"
                      name="businessName"
                      id="businessName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="website" className="form-label">
                      Website Link
                    </label>
                    <input
                      type="website"
                      className="form-control"
                      name="website"
                      id="website"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <input
                      type="location"
                      className="form-control"
                      name="location"
                      id="location"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      defaultValue="default"
                      className="business-category form-select"
                      aria-label="Default select example"
                      name="category"
                      id="category"
                      required
                      onChange={handleChange}
                    >
                      <option value="default">Business Category</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="gardening">Gardening</option>
                      <option value="building">Building</option>
                    </select>
                  </div>
                  <div className="input-group mb-3">
                    <label htmlFor="logo" className="input-group-text">
                      Logo
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="logo"
                      id="logo"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e)}
                    />
                  </div>
                  <div className="input-grou mb-3">
                    <img src={form.logo} alt="" style={{ width: '100px' }} />
                  </div>
                  <div className="input-group">
                    <button type="submit" className="btn btn-success">
                      Register as a Business
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div> */}
          {/* <div className="col ">
            <div className="d-flex flex-col align-items-center h-100 w-100 justify-content-center">
              <img
                src="/images/home.jpg"
                className="img-fluid"
                alt="home-image"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Registration
