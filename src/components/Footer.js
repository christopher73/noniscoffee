import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-3 mx-auto text-center col-md-6 ">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <p className="text-muted">Another one</p>
                </li>
                <li>
                  <p className="text-muted">Last time</p>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-3 mx-auto text-center col-md-6 ">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <p className="text-muted">Resource</p>
                </li>{" "}
                <li>
                  <p className="text-muted">Resource</p>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-3 mx-auto text-center col-md-6 ">
              <h5>About</h5>
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
          <small className="d-block mb-3 text-muted">© 2017-2018</small>
        </div>
      </footer>
    );
  }
}
