import React from 'react'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewBusiness, addNewCustomer } from '../api'


function Register() {
  const [formType, setFormType] = useState("")
  navigate = useNavigate()

  function handleChange(event) {
    setFormType(event.target.value)
  }

  function handleSubmitBusiness(event) {
    event.preventDefault()
    addNewBusiness(input)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.error(err)
      })
  }
  
  function handleSubmitCustomer(event) {
    event.preventDefault()
    addNewCustomer(input)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function submitBusiness() {
    setFormType("business")
  }

  function submitCustomer() {
    setFormType("customer")
  }

  return (
    <main>

      {!formType &&
        <section className="register-container">
          <p>
            Welcome to Serv. I am a:
          </p>
          <section className="register-item">
            <div className="business-item">
              <p>
                Business looking for customers
              </p>
              <button className="button-primary" onClick={submitBusiness}>
                Register
              </button>
            </div>
            <div className="customer-item">
              <p>
                Customers looking for customers
              </p>
              <button className="button-primary" onClick={submitCustomer}>
                Register
              </button>
            </div>
          </section>
        </section>
      }
      {formType === "business" ?

        (<section className="business-form">
          <p>Tell your customers about your business</p>
          <form>
            <label clasName="label-primary">Business Name</label>
            <input type="text"
              value={name}
              onChange={handleChange} />
            <label clasName="label-primary">Website Link</label>
            <input type="text"
              value={website}
              onChange={handleChange} />
            <p>Type of business</p>
            <label for="plumbing">Plumbing</label>
            <input type="checkbox"
              onChange={onChange}
              defaultChecked={true}
              name="plumbing"
              value={plumbing} />
            <label for="gadening">Gardening</label>
            <input type="checkbox"
              onChange={onChange}
              defaultChecked={true}
              name="gardening"
              value={gardening} />
            <select onClick={handleSubmitBusiness}>Add</select>
          </form>
        </section>
        ) :
        (<section className="customer-form">
          <p>Get your job taken care of!</p>
          <form>
            <label>Description of your issue: </label>
            <input type="textarea"
              name="textValue"
              onChange={handleChange} />
            <p>
              Estimated budget:
            </p>
            <div className="flex-row">
              <input type="text" value={priceMin} onChange={handleChange} />
              <p>
                to
              </p>
              <input type="text" value={priceMax} onChange={handleChange} />
            </div>
            {/* file upload to go here   */}
            <p>Type of business</p>
            <label for="plumbing">Plumbing</label>
            <input type="checkbox"
              onChange={onChange}
              defaultChecked={true}
              name="plumbing"
              value={plumbing} />
            <label for="gadening">Gardening</label>
            <input type="checkbox"
              onChange={onChange}
              defaultChecked={true}
              name="gardening"
              value={gardening} />
            <select onClick={handleSubmitCustomer}>Add</select>
          </form>
        </section>)
      }
    </main>
  )
}

export default Register
