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
    const videoOptions = {
      src: video,
      autoPlay: true,
      muted: true,
      loop: true
    };

    return (
      <>
        <Navbar
          isWindowlarge={window.innerWidth <= 760 ? false : true}
        ></Navbar>
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
        <div className="container h-100 text-center w-100 d-flex flex-column justify-content-center align-items-center">
          <div
            width={this.state.width}
            height={this.state.height}
            className="row"
          >
            <div className="col-md-12 m-auto text-white text-center">
              <h1
                style={{ fontFamily: " 'Rye', cursive" }}
                className={`${
                  window.innerWidth <= 760 || window.innerHeight <= 700
                    ? "h1 "
                    : "display-2"
                } text-uppercase  font-weight-lighter`}
              >
                Noni's<br></br> Coffee Shop
              </h1>
            </div>

            <div
              className={`col-md-12 col-sm-12  m-auto  text-center  ${
                window.innerWidth <= 760 || window.innerHeight <= 700
                  ? "py-2"
                  : "my-3 py-4"
              }`}
            >
              <button
                aria-required="true"
                aria-label="Primary"
                className={`btn btn-outline-light text-white border-white ${
                  window.innerWidth <= 760 || window.innerHeight <= 700
                    ? "btn-sm "
                    : "btn-lg "
                }`}
              >
                ORDER ONLINE
              </button>
            </div>
            <div className="col-md-12 col-sm-12 m-auto text-center">
              <h3
                className={`${
                  window.innerWidth <= 760 || window.innerHeight <= 700
                    ? "h5"
                    : "h3"
                } text-uppercase text-white `}
              >
                5921 Riverdale Ave<br></br> Bronx, NY 10471<br></br>
                (718) 601-0132
              </h3>
            </div>
          </div>
          <div
            style={{
              right: "0",
              bottom: "0",
              padding: "5%",
              position: "absolute"
            }}
          >
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
