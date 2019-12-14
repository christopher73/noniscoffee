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
  render() {
    const videoOptions = {
      src: video,
      autoPlay: true,
      muted: true,
      loop: true
    };
    return (
      <>
        <Navbar></Navbar>
        <div className="video">
          <Cover
            // style={{ background: "black" }}
            videoOptions={videoOptions}
            remeasureOnWindowResize
            getResizeNotifier={resizeNotifier => {
              this.setState({
                resizeNotifier
              });
            }}
          />
        </div>
        <div className="h-100 container text-center w-100 d-flex flex-column justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-12 m-auto text-white text-center">
              <h1
                style={{ fontFamily: " 'Rye', cursive" }}
                className={`${
                  window.innerWidth <= 760 ? "h1" : "display-2"
                } text-uppercase  font-weight-lighter`}
              >
                Noni's<br></br> Coffee Shop
              </h1>{" "}
              <button
                aria-required="true"
                aria-label="Primary"
                className="btn btn-lg btn-outline-light p-2 m-5 font-weight-bold"
              >
                ORDER ONLINE
              </button>
              <h3 className="text-uppercase ">
                5921 Riverdale Ave<br></br> Bronx, NY 10471
              </h3>
              <h3 className="text-uppercase my-3 ">(718) 601-0132</h3>
            </div>
          </div>
          <Link
            activeClass="active"
            to="mainDescription"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
          >
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </Link>
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