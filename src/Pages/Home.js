import React from "react";
// import Navbar from "../components/Navbar";
import video from "../assets/coffee.mp4";
import Cover from "react-video-cover";
import "../App.css";
import Testimonials from "../components/Testimonials";
import { Link, animateScroll as scroll } from "react-scroll";
import GoogleMaps from "../components/GoogleMaps";
import Navbar from "../components/Navbar";
import PhotoGallery from "./PhotoGallery";
import Footer from "../components/Footer";
import Info from "../components/Info";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 800,
      height: 182
    };
  }

  updateDimensions() {
    if (window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width = window.innerWidth - 100;
      let update_height = Math.round(update_width / 6);
      this.setState({ width: update_width, height: update_height });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Navbar
          isWindowlarge={
            window.innerWidth || window.innerHeight >= 760 ? true : false
          }
        ></Navbar>
        <div
          id="main"
          className="d-flex flex-column align-content-center justify-content-md-center justify-content-around "
        >
          <div className="container">
            <div className="row ">
              <div className="col-md-10 m-auto text-white text-center">
                <h1
                  style={{ fontFamily: " 'Rye', cursive", color: "#F2EFE6" }}
                  className={`${
                    window.innerWidth <= 760 || window.innerHeight <= 700
                      ? "h1 "
                      : "display-2"
                  } text-uppercase  font-weight-lighter`}
                >
                  Noni's<br></br> Coffee Shop
                </h1>
              </div>
              <div className="col-md-4 col-sm-6 col-12 m-auto py-2 text-center">
                <Link to="/orderonline">
                  <li
                    id="btn3"
                    className="btn btn-lg shadow-lg rounded-0 font-weight-bold text-uppercase "
                  >
                    order online
                  </li>
                </Link>

                <Link to="/menu">
                  <li
                    id="btn3"
                    className="btn btn-lg shadow-lg rounded-0 font-weight-bold text-uppercase "
                  >
                    view menus
                  </li>
                </Link>
              </div>
            </div>
          </div>{" "}
          <div
            className="p-5 position-absolute"
            style={{ right: 0, bottom: 0 }}
          >
            <Link
              activeClass="active"
              to="mainDescription"
              spy={true}
              smooth={true}
              offset={-180}
              duration={1200}
            >
              <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
              </svg>
            </Link>
          </div>
        </div>
        <Info />
        <Testimonials />
        <PhotoGallery />
        <GoogleMaps />
        <Footer />
      </>
    );
  }
}
