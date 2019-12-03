import React from "react";
import Navbar from "./components/Navbar";
import video from "./latte.mp4";
import VideoCover from "react-video-cover";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="h-100 ">
          <div className="video-contain">
            <Navbar></Navbar>
            <video
              width="100%"
              heigh="100%"
              style={{ objectFit: "cover" }}
              className="video"
              loop
              autoPlay
              muted
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="container">hello</div>
      </>
    );
  }
}

export default App;
