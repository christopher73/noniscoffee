import React from "react";
import Navbar from "./components/Navbar";
import video from "./latte.mp4";
import Cover from "react-video-cover";
import "./App.css";
import Testimonials from "./components/Testimonials";
const style = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  opacity: 0.87,
  backgroundColor: "black"
};
class App extends React.Component {
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
        <div style={style}>
          <Cover
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
              <h1 className="display-2 text-uppercase font-weight-bold">
                Nonis<br></br> Coffee Shop
              </h1>{" "}
              <button className="btn btn-lg btn-outline-light p-2 m-5 font-weight-bold">
                ORDER ONLINE
              </button>
              <h3 className="text-uppercase ">
                5921 Riverdale Ave<br></br> Bronx, NY 10471
              </h3>
              <h3 className="text-uppercase my-3 ">(718) 601-0132</h3>
            </div>
          </div>
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>

        <div className="container ">
          <div className="row">
            <div className="col-md-12 m-auto text-black text-center">
              Alex Cafe & Deli serves up some of the best Deli for delivery in
              all of New York. Delivery is fast and ordering is easy, so order
              now and get fresh food delivered to your door in no time.
            </div>
          </div>
        </div>
        <Testimonials></Testimonials>
      </>
    );
  }
}

export default App;
