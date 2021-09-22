import {Link} from 'react-router-dom'
function Footer(){
    return(
        <>
         <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">Useful Links:</h2>
          <div className="divider-custom divider-light">
          </div>
          <div className="row">
            <div className="col-md-4 ms-auto">
                <h4>Github Link:</h4> 
            
               <h6>https://github.com/Noorali77</h6>
                </div>
            <div className="col-md-4 me-auto"><h4>Behance Link:</h4>
                   <h6>https://www.behance.net/thenoorali</h6>
            </div>
          </div>
         
        </div>
      </section>
     </>
    )
}

export default Footer;