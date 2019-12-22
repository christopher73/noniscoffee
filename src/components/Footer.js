import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer3 pt-4 mt-3 pt-md-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-12 mx-auto text-center">
              <h4>Features</h4>
              <ul className="list-unstyled text-small">
                <li>
                  <p className="text-muted">Another one</p>
                </li>
                <li>
                  <p className="text-muted">Last time</p>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3 col-12 mx-auto text-center">
              <h4>Social Media</h4>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    className="text-decoration-none text-muted"
                    href="https://www.facebook.com/pages/Nonis-Coffee-Shop-Inc/116436165051459"
                  >
                    facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3 col-12 mx-auto text-center">
              <h4>About</h4>
              <ul className="list-unstyled text-small">
                <li>
                  <p className="text-muted">Privacy</p>
                </li>
                <li>
                  <p className="text-muted">Terms</p>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <div className="col-12 col-md m-auto text-center">
          <p>©2019 </p>{" "}
          <small className="d-block mb-1 ">
            made with {"<3"} by rocketdevs{" "}
            <img
              style={{ width: "30px" }}
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/223/rocket_1f680.png"
            ></img>{" "}
          </small>{" "}
        </div>
      </footer>
    );
  }
}
