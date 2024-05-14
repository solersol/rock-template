import Home from "./home";
import logo1 from "./img/logo1.jpeg";
import About from "./about";
import Token from "./tokeno";
import Roadmap from "./rmap";
import Contact from "./contact";
import Navbar from "./nav";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const allImg = {
  tw: require("./soc-logo/uil-twitter.png"),
  tg: require("./soc-logo/uil-telegram.png"),
  dc: require("./soc-logo/uil-discord.png"),
  rd: require("./soc-logo/uil-reddit.png"),
  pepeR1: require("./img/pr1-removebg-preview.png")
}

const allImg2 = {
  pepeR2: require("./img/pr2-removebg-preview.png"),
  blob: require("./img/htbuy.png")
}

const allImg3 = {
  pepeR3: require("./img/pr4-removebg-preview.png"),
  pepeR4: require("./img/pr4A-removebg-preview.png"),
  rmCircle: require("./img/ATcircle.png")
}

const allImg4 = {
  dt: require("./img/brand1.png"),
  ds: require("./img/brand2.png"),
  dv: require("./img/brand3.png"),
  cc: require("./img/brand4.png")
}

const rmPic = require("./img/roadMapSec.png");

function App() {
    return (
      <Router>
        <div className="App">
            <Navbar logo1={logo1} />
            <div className="AllPage">
              <Switch>
                <Route exact path="/home">
                  <Home ObjImg={ allImg } />
                </Route>
                <Route exact path="/about">
                  <About allImg2={allImg2} />
                </Route>
                <Route exact path="/tokeno">
                  <Token allImg3={allImg3} />
                </Route>
                <Route exact path="/rmap">
                  <Roadmap rmPic={rmPic} />
                </Route>
                <Route exact path="/contact">
                  <Contact logo1={logo1} allImg={allImg} allImg4={allImg4} />
                </Route>
                <Route path="*">
                  <Home ObjImg={ allImg } />
                </Route>
              </Switch>
            </div>
      </div>
      </Router>
    );
}

export default App;
