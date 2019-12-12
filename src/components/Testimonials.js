import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default class Testimonials extends React.Component {
  render() {
    return (
      <div className="container my-5 py-3">
        <div className="row">
          <div className=" col-md-4 col-12 text-center ">
            <h1>Client Testimonials</h1>
            <h3> Here’s what our customers say:</h3>
          </div>
        </div>
        <div className="row">
          <div className=" col-md-4 col-12">
            <div className="card border-0 text-center">
              <div className="card-header bg-transparent">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ color: "#669CFF", height: "30", width: "30px" }}
                />
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    I just finished an "Outstanding Thanksgiving Dinner"
                    delivered HOT from Noni's. Light and dark meat Turkey.
                    Stuffing. (A moutain :) Plenty of rich tasty gravy.
                    Cranberry sauce. Remarkable Roasted sweet potatoes. 6
                    Vegetable medly. Soup. Large slice of pie. I was thrilled
                    with this "Thanksgiving Feast!" Delivered to you for $20.00.
                    There is still time to get your Turkey Feast. Bradley J. W.
                    p.s. Thank you Ruthy, you are the best!
                  </p>
                  <footer className="blockquote-footer">Bradley Wilfong</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className=" col-md-4 col-12">
            <div className="card border-0 text-center">
              <div className="card-header bg-transparent">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ color: "#669CFF", height: "30", width: "30px" }}
                />
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    These people are great. Super speedy service and the
                    friendliest people working here. We ate bagel sandwiches—
                    and though they were unusual requests, the folks working
                    were happy to accommodate and gave us a good laugh in the
                    process. Definitely a new favorite stop in the Bronx!
                  </p>
                  <footer className="blockquote-footer">Tenley Garrett</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className=" col-md-4 col-12">
            <div className="card border-0 text-center">
              <div className="card-header bg-transparent">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ color: "#669CFF", height: "30", width: "30px" }}
                />
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    The last time we ate here was almost 13 years ago when my
                    wife was finishing her last year of nursing school at CMSV.
                    Since we were in the area, we decided to have breakfast at
                    Noni’s and nothing has changed. The food was great, service
                    was fast and Ruth is the same, friendly and warm hearted
                    person we met back then.
                  </p>
                  <footer className="blockquote-footer">
                    Francis Averilla
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
