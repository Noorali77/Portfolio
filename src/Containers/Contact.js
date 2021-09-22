import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact(){
    return(
        <>
<Navbar/>

 <section className="page-section mt-5" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact:</h2>
          
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
            
              <form id="contactForm">
             
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text"/>
                  <label htmlFor="name">Full name:</label>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" />
                  <label htmlFor="email">Email address:</label>
                 
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="phone" type="number" />
                  <label htmlFor="phone">Phone number:</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" id="message" type="text" style={{height: '10rem'}} data-sb-validations="required" defaultValue={""} />
                  <label htmlFor="message">Message:</label>
                </div>
           
            

                <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer/>


        </>
    )
}
export default Contact;