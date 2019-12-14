import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="container" id="location">
        <div className="row">
          <div className="col-md-6 col-12 my-3">
            <div
              className=" position-relative shadow-lg"
              style={{ height: "40vh", width: "100%" }}
            >
              {" "}
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAnUzSJxPUjb-nhWHWrsuvWuocMSwb815Q"
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
          <div className="col-md-6 col-12 my-3 text-center d-flex flex-column justify-content-around ">
            {" "}
            <p className="h3 font-weight-bold">LOCATION:</p>
            <p className="h3 ">Riverdale Ave, The Bronx, NY 10471</p>
            <p className="h3 font-weight-bold">HOURS:</p>
            <p className="h3"> 5AM - 6:30 PM </p>
            <p className="h3 font-weight-bold">PHONE:</p>
            <p className="h3">(718)601-0132</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleMaps;
