import {BrowserRouter as Router,Switch,Route,useLocation} from "react-router-dom";
import { useEffect } from "react";
import Home from '../Containers/Home'
import Skills from "../Containers/Skills";
import Projects from "../Containers/Projects";
import Experience from '../Containers/Experience'
import Contact from '../Containers/Contact'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}


function AppRouter(){
    return(
    <Router>
      <ScrollToTop/>
       <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/skills' component={Skills} />
     <Route exact path='/projects' component={Projects} />
     <Route exact path='/experience' component={Experience} />
     <Route exact path='/contact' component={Contact}/>

     



     
       </Switch>

        </Router>
    );

}

export default AppRouter;