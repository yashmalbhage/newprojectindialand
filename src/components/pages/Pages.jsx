import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Firstblog from "../blog/firstblog"
import Secondblog from "../blog/secondblog"
// import Blog from "../blog/Blog1"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import { LeaderShip } from "../LeaderShip/LeaderShip"
import { Chiarman } from "../Chairman/Chiarman"
import { Project1 } from "../project1/Project1"
import { Project2 } from "../project2/Project2"
import { Project3 } from "../project3/Project3"
import Preloader from "../preloader/Preloader"
import Navbar from "../common/newNabar/Navbar"

const Pages = () => {
  return (
    <>
          <Preloader/>


      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          {/* <Route exact path='/blog' component={Blog} /> */}
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/Leadership' component={LeaderShip} />
          <Route exact path='/Chairman corner' component={Chiarman} />
          <Route exact path='/Hinjewadi' component={Project1} />
          <Route exact path='/Coimbatore' component={Project2} />
          <Route exact path='/Chennai' component={Project3} />
          <Route exact path = '/fir' Component={Firstblog}/>
          <Route exact path = '/sec' component={Secondblog}/>
          





        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
