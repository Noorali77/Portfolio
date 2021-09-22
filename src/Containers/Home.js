import Navbar from "../Components/Navbar";
import frontimg from '../assets/images/frontimg.svg'

function Home(){
    return(
        <>
       <Navbar/>

       <header className="masthead bg-primary text-white text-center mb-5">
        <div className="container d-flex align-items-center flex-column">
          <img className="masthead-avatar mb-5" src={frontimg} alt="Front Image" />
          <h1 className="masthead-heading mb-0">Hi! I am Noor Ali</h1>
          <div className="divider-custom divider-light">
          </div>
          <p className="masthead-subheading font-weight-light mb-0">Computer Scientist - Graphic Designer - Full Stack Developer</p>
        </div>
      </header>

   

            </>
    )

}

export default Home;