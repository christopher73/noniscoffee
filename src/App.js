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
  opacity: 0.8
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
        {" "}
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
        <div className="h-100">
          <div className="container text-center w-100">
            <div className="row">
              <div className="col-md-12 m-auto text-white text-center">
                <h1 className="display-4"> DEli</h1>
              </div>
            </div>{" "}
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
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
