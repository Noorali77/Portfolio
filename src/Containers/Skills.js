import Navbar from "../Components/Navbar";
import Ai from '../assets/images/ai.png'
import Ps from '../assets/images/ps.png'
import Html from '../assets/images/html.png'
import Css from '../assets/images/css.png'
import Bootstrap from '../assets/images/bootstrap.png'
import Js from '../assets/images/js.png'
import Footer from "../Components/Footer";
function Skills(){
    return(
        <>

 <Navbar/>
 <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-secondary mt-4 mb-0">Skills:</h2>
          <div className="divider-custom">
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Ai} alt="Adobe illustrator logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Ps} alt="Adobe Photoshop logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Bootstrap} alt="Html Logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src={Html} alt="css logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Css} alt="bootstrap logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid mt-5" src={Js} alt="Js logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>

        </>
    )
}

export default Skills;