import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default class Info extends React.Component {
  render() {
    return (
      <div
        id="mainDescription"
        style={{ color: "#24355d" }}
        className="container "
      >
        <div className="row">
          <div className="col-md-12 m-auto text-black text-center py-4">
            <h1>
              About Noni's Coffee Shop <br></br> -since 2010-
            </h1>
            <h3>
              {" "}
              Noni's Coffee Shop serves up some of the best Deli for delivery in
              all of New York. Delivery is fast and ordering is easy, so order
              now and get fresh food delivered to your door in no time.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
