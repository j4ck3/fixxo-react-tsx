import React from 'react'
import NavBar from '../sections/NavBar';
import Footer from '../sections/Footer';
import ContactForm from '../sections/ContactForm';
import BreadCrumb from '../sections/BreadCrumb';

const Contact:React.FC = () => {
  return (
    <>
    <NavBar />
    <BreadCrumb currentPage="Contact"/>
    <iframe title="adress" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32569.901228608014!2d18.069478692745925!3d59.322620996849196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1665754418253!5m2!1sen!2sse" 
      width="100%" height="350" /* style={{border: "none"}} loading="lazy" */ referrerPolicy="no-referrer-when-downgrade"></iframe>
    <ContactForm/>
    <Footer />
    </>
  )
}

export default Contact