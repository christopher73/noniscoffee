import React from "react";
import Navbar from "./components/Navbar";
import video from "./assets/coffee.mp4";
import "./App.css";
// import Cover from "react-video-cover";
// import Testimonials from "./components/Testimonials";
// import { Link, animateScroll as scroll } from "react-scroll";
// import GoogleMaps from "./components/GoogleMaps";
// import Gallery from "./components/PhotoGallery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PhotoGallery from "./Pages/PhotoGallery";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}></Route>
      </Router>
    );
  }
}
//        <Route path="/gallery" component={PhotoGallery}></Route>

export default App;
