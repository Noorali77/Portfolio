import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
import Commander from '../assets/images/Gdesign/commander.jpg'
import Online from '../assets/images/Gdesign/online-01.jpg'
import Typo from '../assets/images/Gdesign/realpaktypo-01.jpg'
import Repay from '../assets/images/Gdesign/repay1.jpg'
import Scrap from '../assets/images/Gdesign/SCRAP COLLECTOR.jpg'
import Stars from '../assets/images/Gdesign/stars1.jpg'
import Yes from '../assets/images/Gdesign/yes.jpg'
import Social from '../assets/images/Gdesign/social media.jpg'
import Printer from '../assets/images/Gdesign/3dprinter.jpg'
import Weather from '../assets/images/Websites/weather.png'
import Word from '../assets/images/Websites/word.png'
import Quiz from '../assets/images/Websites/quiz.png'
import Foodbay from '../assets/images/Websites/foodbay.png'
import Stopwatch from '../assets/images/Websites/stopwatch.png'
import Todo from '../assets/images/Websites/todo.png'



function Projects(){
    return(
       <>
       <Navbar/>

       <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-secondary mt-4 mb-0">Graphic Designing:</h2>
          <div className="divider-custom">
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Commander} alt="Adobe illustrator logo" />
              </div>
            </div>
             <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Online} alt="Adobe Photoshop logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Typo} alt="Html Logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src={Repay} alt="css logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Scrap} alt="bootstrap logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Stars} alt="Js logo" />
              </div>
            </div> 
         
            <div className="col-md-6 col-lg-4 mb-5 mt-5 mb-lg-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src={Yes} alt="css logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mt-5 mb-md-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Social} alt="bootstrap logo" />
              </div>
            </div>
            <div className="col-md-6 mt-5 col-lg-4">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Printer} alt="Js logo" />
              </div>
            </div>  
            
          </div>
        </div> 
      </section>


      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-secondary mb-0">Websites:</h2>
          <div className="divider-custom">
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Weather} alt="Adobe illustrator logo" />
                <h2 className='mt-2'>Weather App:</h2>
                <h6>Weather App is created by using React which gives the real time data about the temepraure all over the world.</h6>
              </div>
            </div>
             <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Word} alt="Adobe Photoshop logo" />
                <h2 className='mt-2'>Text Editor:</h2>
                <h6>Text Editor is an Online App which is created by using React on which we can manage our texts.</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Quiz} alt="Html Logo" />
                <h2 className='mt-2'>Quiz App:</h2>
                <h6>Quiz App is an online App which gives the real time results. Quiz App is created in javascript and firebase.</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src={Foodbay} alt="css logo" />
                <h2 className='mt-2'>Online Food App:</h2>
                <h6>Foodbay is an Online FoodApp.Which is created by using javascript and firebase.</h6>

              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Stopwatch} alt="bootstrap logo" />
                <h2 className='mt-2'>Stop Watch:</h2>
                <h6>Stopwatch App is created by using javascript.</h6>

              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                </div>
                <img className="img-fluid" src={Todo} alt="Js logo" />
                <h2 className='mt-2'>Todo App:</h2>
               <h6>Todo App is created by using React.</h6>
              </div>
            </div> 
          </div>
        </div> 
      </section>


     <Footer/>


       </>
    );
}

export default Projects;