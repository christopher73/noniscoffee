import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <h1>{text}</h1>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 40.8184116,
      lng: -74.0130552
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="container" id="location">
        <div className="row">
          <div className="col-md-6 col-12 my-3 text-center d-flex flex-column justify-content-around ">
            {" "}
            <p className="h3 font-weight-bold">LOCATION:</p>
            <p className="h3 ">Riverdale Ave, The Bronx, NY 10471</p>
            <p className="h3 font-weight-bold">HOURS:</p>
            <p className="h3"> 5AM - 6:30 PM </p>
            <p className="h3 font-weight-bold">PHONE:</p>
            <p className="h3">(718)601-0132</p>
          </div>{" "}
          <div className="col-md-6 col-12 my-3">
            <div
              className="shadow-lg"
              style={{ height: "600px", width: "100%" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.8083094943654!2d-73.90556174122823!3d40.90777634615085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f24e88cbe0a1%3A0x129b15a4fc21893e!2sNoni&#39;s%20Coffee%20and%20Deli!5e0!3m2!1sen!2sus!4v1576826522158!5m2!1sen!2sus"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%"
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleMaps;
