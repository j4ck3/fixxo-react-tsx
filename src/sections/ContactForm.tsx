import React, {useState} from 'react'

interface Props {
  name: string 
  email: string  
  comments: string
}



const ContactForm:React.FC = () => {

  const [contactForm, setContactForm] = useState({name: '', email: '', comments: ''})
  const [formErrors, setFormErrors] = useState({name: '', email: '', comments: ''})
  const [canSubmit, setCanSubmit] = useState(false)

  const [submitted, setSubmitted] = useState(false)
  const [SubmitFailed, setSubmitFailed] = useState(false)

  const handleChange = (e: { target: { id: string; value: string } })=> {
    const {id, value} = e.target
    setContactForm({...contactForm, [id]: value})
    setFormErrors(validate(contactForm))
  }

  const validate = (values: Props) => {
    const errors = {name: '', email: '', comments: ''}
    const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const regex_name = /^[A-Za-z]{1,30}$/

    //name
      if (values.name.length <= 1)
        errors.name = 'Name must be at least two character long'
        else if (!regex_name.test(values.name))
          errors.name = 'Name can only contain only letters'

    //email
    if (!regex_email.test(values.email))
      errors.email = 'You must enter a valid Email Adress'
    

    //comments
    if (values.comments.length <= 4) 
      errors.comments = 'Comment must be at least five characters long'
        else if (values.comments.length >= 2000)
        errors.comments = 'Comment cannot exceed 2000 characters'

    if (Object.keys(errors).length === 0)
      setCanSubmit(true)
    else
      setCanSubmit(false)

    return errors;
  }



  const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault()
      setFormErrors(validate(contactForm))

      if (canSubmit === true) {
        let json = JSON.stringify(contactForm)
        fetch ('https://win22-webapi.azurewebsites.net/api/contactform', {
          method: 'post',
          headers: { 'Content-Type': 'application/json'},
          body: json
        })

        .then(res => {
        if (res.status === 200) {
          setSubmitted(true)
          setSubmitFailed(false)
          contactForm.name = ""
          contactForm.email = ""
          contactForm.comments = ""
        } 
        else {
          setSubmitted(false)
          setSubmitFailed(true)
        }})
      }
  }

  return (
      <div className='container'>
        <div className='contact-form'>
          <h2>Come in Contact with Us</h2>
          {
          submitted ? 
            (
            <div className='alert alert-success ' role='alert'>
            <h2 className='text-center'>Thank you for your comments!</h2>
            <p className='text-center'>We will contact you as soon as possible.</p>
            </div>
            ) : ( <></> )
        }
                {
          SubmitFailed ? 
            (
            <div className='alert alert-danger text-center' role='alert'>
            <h2 className='text-center'>Something wen't wrong!</h2>
            <p className='text-center'>Please try again later or contact <a className='link-info' href='#'>Support.</a></p>
            </div>
            ) : ( <></> )
        }
          <form noValidate onSubmit={handleSubmit}>
            <div>
              <input className={`${ formErrors.name ? "error" : ""}`} id='name' type='text' 
              placeholder='Your Name' value={contactForm.name} onChange={handleChange}/>

              <div className='error-message'>{formErrors.name}</div>
            </div>
            <div>
              <input className={`${ formErrors.email ? "error" : ""}`} id='email' type='email' autoComplete='off' 
              placeholder='Your Email Adress' value={contactForm.email} onChange={handleChange}/>

              <div className='error-message'>{formErrors.email}</div>
            </div>
            <div className='textarea' >
              <textarea className={`${ formErrors.comments ? "error" : ""}`} id='comments' /* type='text'  */
              placeholder='Comments' value={contactForm.comments} onChange={handleChange} /* onKeyUp={handleChange} *//>

              <div className='error-message'>{formErrors.comments}</div>
            </div>
            <div>
              <button type='submit' className={`contact-btn ${ canSubmit ? "" : "disabled"}`}>Post Comments</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default ContactForm