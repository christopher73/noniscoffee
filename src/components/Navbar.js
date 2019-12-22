import React from "react";
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";

import { Link } from "react-router-dom";
let lastScrollY = 0;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orderOnline: false };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  nav = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (lastScrollY > 0) {
      // this.nav.current.style.backgroundColor = "rgb(115, 31, 31,0.85)";
      this.setState({ orderOnline: true });
    } else {
      this.setState({ orderOnline: false });
    }
    console.log(lastScrollY);
  };
  render() {
    return (
      <header id="headerNav">
        <div
          className={`navbar navbar-expand-lg ${
            this.state.orderOnline ? "fixed-top " : "sticky-top"
          }`}
          style={{
            backgroundColor: "#f6c6b5",
            color: "#24355D",
            textAlign: "center"
          }}
        >
          <a
            style={{ color: "#24355D", fontFamily: " 'Rye', cursive" }}
            className="h1 p-0 m-0 font-weight-normal navbar-brand"
            href="#"
          >
            Noni's<br></br> Coffee Shop
          </a>{" "}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              {" "}
              <SmoothLink
                activeClass="active"
                to="location"
                spy={true}
                smooth={true}
                isDynamic={true}
                offset={-80}
                duration={1200}
              >
                <li
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  style={{ color: "#24355D" }}
                  className="btn btn-lg btn-link  font-weight-bold text-uppercase "
                >
                  HOURS & LOCATION
                </li>
              </SmoothLink>{" "}
              <Link to="/">
                <li
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  style={{ color: "#24355D" }}
                  className="btn btn-lg btn-link  font-weight-bold text-uppercase "
                >
                  menus
                </li>
              </Link>
              <SmoothLink
                activeClass="active"
                to="mainDescription"
                spy={true}
                smooth={true}
                isDynamic={true}
                offset={-80}
                duration={1200}
              >
                <li
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  style={{ color: "#24355D" }}
                  className=" btn btn-lg btn-link  font-weight-bold text-uppercase"
                >
                  about
                </li>
              </SmoothLink>
              <SmoothLink
                activeClass="active"
                to="photoGallery"
                spy={true}
                smooth={true}
                isDynamic={true}
                offset={-80}
                duration={1200}
              >
                <li
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  style={{ color: "#24355D" }}
                  className="btn btn-lg btn-link  font-weight-bold text-uppercase "
                >
                  gallery
                </li>
              </SmoothLink>
              <Link to="/orderonline">
                <li
                  id="btn3"
                  className="btn btn-lg shadow-lg rounded-0   font-weight-bold text-uppercase"
                >
                  order online
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {!this.state.orderOnline ? (
          <div
            style={{
              backgroundColor: "#24355D",
              padding: "10px"
            }}
          >
            <h5 className="m-0 text-center">
              <a
                target="_blank"
                style={{ color: "#F2EFE6" }}
                href="https://goo.gl/maps/6BL2iW9oKQmoxJ7L9"
              >
                5921 Riverdale Ave Bronx, NY 10471
              </a>
            </h5>
          </div>
        ) : null}
      </header>
    );
  }
}
